import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://localhost:5173"],
  })
);

const fetchNotionData = async () => {
  const url = `https://api.notion.com/v1/databases/${notionDatabaseID}/query`;

  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28", // API 버전 설정
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    throw new Error("Error fetching data from Notion");
  }
};

app.post("/api/notion/databases", async (req, res) => {
  const notionToken = process.env.NOTION_API_KEY;
  const notionDatabaseID = process.env.NOTION_API_PROJECT_DATABASES;

  try {
    const notionData = await fetchNotionData(notionToken, notionDatabaseID);
    res.json(notionData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data from Notion" });
  }
});

export default app;
