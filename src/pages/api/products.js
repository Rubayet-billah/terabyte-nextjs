import { MongoClient, ServerApiVersion } from "mongodb";
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhwsqpg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const database = await client.db("terabyteDb");
    const productsCollection = database.collection("products");
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    if (req.method === "GET") {
      const newses = await productsCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: newses });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
