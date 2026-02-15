const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required" });
  }

  try {
    // Save to DB
    const c = new Contact({ name, email, phone, message });
    await c.save();

    // Send email if SMTP config available
    const host = process.env.EMAIL_HOST;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const port = process.env.EMAIL_PORT || 587;
    const from = process.env.FROM_EMAIL || process.env.EMAIL_USER;
    const to =
      process.env.NOTIFY_EMAIL ||
      process.env.FROM_EMAIL ||
      process.env.EMAIL_USER;

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port: Number(port),
        secure: Number(port) === 465, // true for 465, false for other ports
        auth: { user, pass },
      });

      const mailOptions = {
        from: from,
        to: to,
        subject: `New Contact Message from ${name}`,
        html: `
    <h2>New Portfolio Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
      };

      transporter
        .sendMail(mailOptions)
        .catch((err) => console.error("Mail send error:", err));
    } else {
      console.warn("SMTP not configured: skipping sendMail");
    }

    res.status(201).json({ ok: true, id: c._id });
  } catch (err) {
    console.error("Contact save error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
