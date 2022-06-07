export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.inclues("@" || !name || !message)) {
      return res.status(402).json({
        error: "Please enter a valid email and message",
      });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res.status(201).json({ message: newMessage });
  }
}
