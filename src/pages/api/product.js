import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhwsqpg.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDatabase() {
  await client.connect();
  return client.db("terabyteDb").collection("products");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    console.log(req.query);

    try {
      const productsCollection = await connectDatabase();
      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });

      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json({ message: "Success", data: product });
      }
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
