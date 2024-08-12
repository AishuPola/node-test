import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
const app = express();
import productRouter from "./routes/products.routes.js";

const PORT = process.env.PORT || 4000;
app.use(cors()); //for all the ,ethods cors is allowed
app.use(express.json());
app.use("/products", productRouter);
// app.use("/orders", ordersRouter);
// app.use("/cart", cartRouter);
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
