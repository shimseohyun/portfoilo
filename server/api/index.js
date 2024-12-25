import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://shim-portfolio.site"],
  })
);

const fetchNotionDatabases = async (notionDatabaseID) => {
  const notionToken = process.env.NOTION_API_KEY;

  const url = `https://api.notion.com/v1/databases/${notionDatabaseID}/query`;

  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28",
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

const getNotionPage = async (notionPageID) => {
  const notionToken = process.env.NOTION_API_KEY;

  const url = `https://api.notion.com/v1/pages/${notionPageID}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Notion-Version": "2022-06-28",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    throw new Error("Error fetching data from Notion");
  }
};

const getNotionBlocks = async (notionPageID) => {
  const notionToken = process.env.NOTION_API_KEY;

  const url = `https://api.notion.com/v1/blocks/${notionPageID}/children?page_size=100`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Notion-Version": "2022-06-28",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    throw new Error("Error fetching data from Notion");
  }
};

app.get("/api/notion/blocks/:pageID", async (req, res) => {
  const { pageID } = req.params;

  if (!pageID) {
    return res.status(400).json({ message: "Page ID is required" });
  }

  try {
    const pageData = await getNotionBlocks(pageID);
    res.json(pageData);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch page data from Notion",
    });
  }
});

app.get("/api/notion/page/:pageID", async (req, res) => {
  const { pageID } = req.params;

  if (!pageID) {
    return res.status(400).json({ message: "Page ID is required" });
  }

  try {
    const pageData = await getNotionPage(pageID);
    res.json(pageData);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch page data from Notion",
    });
  }
});

app.post("/api/notion/projects", async (req, res) => {
  const notionDatabaseID = process.env.NOTION_API_PROJECT_DATABASES;

  try {
    const notionData = await fetchNotionDatabases(notionDatabaseID);
    res.json(notionData);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch data from Notion",
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
