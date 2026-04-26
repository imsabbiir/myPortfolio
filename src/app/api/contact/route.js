import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message, service, package: pkg, date } = body;

    // ✅ basic validation
    if (!email || !name || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 EMAIL TO YOU (ADMIN)
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Package:</b> ${pkg}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>Date:</b> ${date}</p>
      `,
    });

    // 📤 AUTO REPLY (CLIENT)
    try {
      await transporter.sendMail({
        from: `"Sabbir Portfolio" <${process.env.EMAIL_USER}>`,
        to: email.trim(), // ✅ important fix
        subject: "We received your message ✅",
        html: `
  <div style="font-family: Arial, sans-serif; background:#0f0f14; padding:20px; border-radius:10px; color:#ffffff;">
    
    <div style="text-align:center; margin-bottom:20px;">
      <h1 style="color:#ffc107; margin:0;">Thank You, ${name}! 🙌</h1>
      <p style="color:#aaa;">We’ve received your message successfully</p>
    </div>

    <div style="background:#1a1a22; padding:15px; border-radius:8px; margin-bottom:15px;">
      <p style="margin:0; color:#ccc;">Hi <b style="color:#fff;">${name}</b>,</p>
      <p style="color:#ccc; line-height:1.6;">
        Thank you for reaching out. I really appreciate your interest in my services.
        I have received your message and I will review it carefully.
      </p>
    </div>

    <div style="background:#1a1a22; padding:15px; border-radius:8px; margin-bottom:15px;">
      <h3 style="color:#ffc107; margin-top:0;">📩 Your Message Summary</h3>
      <p style="color:#ccc;"><b>Name:</b> ${name}</p>
      <p style="color:#ccc;"><b>Email:</b> ${email}</p>
      <p style="color:#ccc;"><b>Service:</b> ${service}</p>
      <p style="color:#ccc;"><b>Package:</b> ${pkg}</p>
      <p style="color:#ccc;"><b>Message:</b> ${message}</p>
    </div>

    <div style="background:#1a1a22; padding:15px; border-radius:8px; margin-bottom:15px;">
      <h3 style="color:#ffc107; margin-top:0;">⏱ What happens next?</h3>
      <p style="color:#ccc;">
        ✔ I will review your request<br/>
        ✔ I will respond within 24 hours<br/>
        ✔ We can discuss your project details
      </p>
    </div>

    <div style="text-align:center; margin-top:20px;">
      <p style="color:#aaa; font-size:12px;">
        Sent on ${date} • This is an automated response
      </p>

      <p style="color:#fff; margin-top:10px;">
        Best regards,<br/>
        <b style="color:#ffc107;">Sabbir</b>
      </p>
    </div>

  </div>
`,
      });

      console.log("Auto reply sent ✔");
    } catch (autoErr) {
      console.log("Auto reply failed ❌:", autoErr.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Main error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}