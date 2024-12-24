import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["https://localhost:5173", "https://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

export default app;
