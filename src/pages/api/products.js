// import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
// import express from "express";
// import cors from "cors";
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 3000;

// // middlewares
// app.use(cors());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhwsqpg.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();

//     const database = await client.db("terabyteDb");
//     const productsCollection = database.collection("products");
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );

//     app.get("/products", async (req, res) => {
//       console.log(req.query);
//       const products = await productsCollection.find({}).toArray();
//       res.status(200).json({ message: "Success", data: products });
//     });

//     // if (req.method === "GET") {
//     //   console.log(req.query);
//     //   const id = req.query.productId;

//     //   if (id) {
//     //     // Fetch a single product by its ObjectId
//     //     const product = await productsCollection.findOne({
//     //       _id: new ObjectId(id),
//     //     });
//     //     if (product) {
//     //       res.status(200).json({ message: "Success", data: product });
//     //     } else {
//     //       res.status(404).json({ message: "Product not found" });
//     //     }
//     //   } else {
//     //     // Fetch all products if productId is not provided
//     //     const products = await productsCollection.find({}).toArray();
//     //     res.status(200).json({ message: "Success", data: products });
//     //   }
//     // }
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   } finally {
//     // Ensure that the client will close when you finish/error
//     // await client.close();
//   }
// }

// app.get("/api", (req, res) => {
//   res.send("assignment server is running");
// });

// app.listen(port, () => {
//   console.log(`server is running on ${port}`);
// });

// export default run;
