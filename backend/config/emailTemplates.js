export const resetPasswordTemplate = (name, link) => `
  <div style="font-family:Arial;padding:20px;background:#f4f7fb">
    <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:30px">

      <h2 style="color:#0a1f44">Genesis Bank</h2>

      <p>Hello <strong>${name}</strong>,</p>

      <p>You requested a password reset.</p>

      <a href="${link}" 
         style="display:inline-block;margin-top:20px;
                padding:12px 20px;
                background:#00c2ff;
                color:white;
                text-decoration:none;
                border-radius:6px;">
        Reset Password
      </a>

      <p style="margin-top:30px;color:#888">
        This link expires in 1 hour.
      </p>

    </div>
  </div>
`;
