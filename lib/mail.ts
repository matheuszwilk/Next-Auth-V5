import nodemailer from 'nodemailer'

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`

  let transporter = nodemailer.createTransport({
    host: process.env.RESEND_KEY,
    port: 25,
    secure: false, // true for 465, false for other ports
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  })

  let info = await transporter.sendMail({
    from: '"H&A DX Improvoments" <f6dx@lge.com>', // sender address
    to: email, // list of receivers
    subject: 'Reset your password', // Subject line
    html: `<a href="${resetLink}">Click here to reset your password</a>`, // html body
  })

  console.log('Message sent: %s', info.messageId)
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/verify-email?token=${token}`

  let transporter = nodemailer.createTransport({
    host: process.env.RESEND_KEY,
    port: 25,
    secure: false, // true for 465, false for other ports
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  })

  let info = await transporter.sendMail({
    from: '"H&A DX Improvoments" <f6dx@lge.com>', // sender address
    to: email, // list of receivers
    subject: 'Verify your email', // Subject line
    html: `<a href="${confirmLink}">Click here to verify your email</a>`, // html body
  })

  console.log('Message sent: %s', info.messageId)
}
