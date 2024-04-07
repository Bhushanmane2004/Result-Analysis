import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bhushanvijaymane@gmail.com",
    pass: "yoazjhfxjpfoicgg",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '<bhushanvijaymane@gmail.com>', // sender address
    to: "manebhushan2004@gmail.com", // list of receivers
    subject: `Hello ✔+ dmcbdjbcxbcvnhbdvnbdmnbfmnbfmnjdbsmtuza aai cvhs dxvndmgnhrkhjdkhcdjdbjchkjhvfdjghkdjnvkdj`, // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
