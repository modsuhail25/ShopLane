import express from "express";
import { PRODUCTS } from "./data/product.js";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/products", (req, res) => {
  res.json(PRODUCTS);
});

app.get("/api/products/:id", (req, res) => {
  const product = PRODUCTS.find((p) => p._id == req.params.id);

  res.json(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
