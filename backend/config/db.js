import dotenv from "dotenv";
dotenv.config();

import { Pool }from "pg";

const pool = new Pool({
  user: process.env.DB_USER,       // <- just the variable, no quotes
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,   // <- just the variable, no quotes
  password: process.env.DB_PASSWORD, // <- just the variable, no quotes
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection
pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("DB connection error:", err));

export default pool;
