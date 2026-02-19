import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { sendWelcomeEmail } from "../config/mailer.js";
import { transporter } from "../config/mailer.js";
import { resetPasswordTemplate } from "../config/emailTemplates.js";
import crypto from "crypto";


// Generate JWT
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// ===== REGISTER =====
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

  const { fullName, email, password } = req.body;

  try {
    const normalizedEmail = email.toLowerCase();

    const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [normalizedEmail]);
    if (existingUser.rows.length > 0) return res.status(400).json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await pool.query(
      `INSERT INTO users (full_name, email, password, balance, savings, investments)
       VALUES ($1, $2, $3, 0, 0, 0)
       RETURNING id, full_name, email`,
      [fullName, normalizedEmail, hashedPassword]
    );

    const user = newUser.rows[0];
    const token = generateToken(user.id);

    // Send welcome email (non-blocking)
    try { await sendWelcomeEmail(user.email, user.full_name); } catch (err) { console.error(err); }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }).status(201).json({ success: true, token, user });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ===== LOGIN =====
export const loginUser = async (req, res) => {
  
  // if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() })

  const { email, password } = req.body;
  console.log("Login Attempt:", { email, password });

  try {
    const normalizedEmail = email.toLowerCase();
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [normalizedEmail]);
    console.log("Database Result:", result.rows); 

    if (result.rows.length === 0) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    // const token = generateToken(user.id);
    const token = jwt.sign({ id: user.id, name: user.full_name }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    // .status(200).json({ success: true, token, user: { id: user.id, fullName: user.full_name, email: user.email } });
    res.status(200).json({ success: true, token, user: { id: user.id, fullName: user.full_name, email: user.email }, message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ===== DASHBOARD =====
export const getDashboard = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT full_name, email, balance, savings, investments
       FROM users
       WHERE id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Dashboard Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, full_name FROM users WHERE email = $1",
      [email.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    const token = crypto.randomBytes(32).toString("hex");

    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await pool.query(
      `UPDATE users
       SET reset_token=$1, reset_token_expiry=$2
       WHERE id=$3`,
      [token, expiry, user.id]
    );

    const resetLink =
      `https://online-bank-3je2.vercel.app/reset-password/${token}`;

    await transporter.sendMail({
      to: email,
      subject: "Genesis Bank Password Reset",
      html: resetPasswordTemplate(user.full_name, resetLink)
    });

    res.json({ message: "Reset link sent to email" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const result = await pool.query(
      `SELECT id FROM users
       WHERE reset_token=$1
       AND reset_token_expiry > NOW()`,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const userId = result.rows[0].id;

    const hashedPassword = await bcrypt.hash(password, 12);

    await pool.query(
      `UPDATE users
       SET password=$1,
           reset_token=NULL,
           reset_token_expiry=NULL
       WHERE id=$2`,
      [hashedPassword, userId]
    );

    res.json({ message: "Password updated successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
