import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;
app.use(cors());

// API 엔드포인트 예제
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the TypeScript server!" });
});

app.listen(PORT, () => {
  console.log(`server running... ${PORT}`);
});
