import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(process.env.DB_USER);
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@nextjs.iimds.mongodb.net/?retryWrites=true&w=majority`
      );
    } catch (e) {
      res.status(500).json({ message: "Error connecting to db" });
      return;
    }

    const db = client.db("nextjs");
    await db.collection("contact").insertOne(newMessage);

    res.status(201).json({ message: newMessage });
  }
}
