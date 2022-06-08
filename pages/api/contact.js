export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res.status(201).json({ message: newMessage });
  }
}
