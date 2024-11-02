import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;
const NEWS_API_KEY = "48bb7a4320bf4bff89db81a4b20f213c";

app.use(express.json());
app.use(cors());

app.get("/news", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-10-15&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`
    );
    // Send only necessary data to the client
    res.json({
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    console.error(
      "Error fetching news:",
      error.response?.data || error.message
    );

    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("/hi", (request, response) => {
  response.send("Hello World!");
});

app.post("/form", (request, response) => {
  console.log("Clicked");
  response.send("Form Submitted");
});

const data = [
  { id: 1, name: "Alak" },
  { id: 2, name: "Orgho" },
  { id: 3, name: "Joya" },
];

const eCommerce = [
  { id: 1, item: "parsley" },
  { id: 2, item: "onion" },
  { id: 3, item: "garlic" },
  { id: 4, item: "kukuri" },
];

app.get("/id", (req, res) => {
  const nameId = parseInt(req.query.id);
  console.log(nameId);

  const message = data.find((call) => call.id === nameId);
  console.log(message);

  if (message) {
    res.send(`Hello ${message.name}`);
  } else {
    res.status(404).send("Error");
  }
});

app.get("/users", (req, res) => {
  res.json({ data });
});

app.get("/shop", (req, res) => {
  res.json({ eCommerce });
});

app.get("/singleItem", (req, res) => {
  const itemId = parseInt(req.query.id);
  const itemName = eCommerce.find((iN) => iN.id === itemId);
  if (itemName) {
    res.status(200).send(`you are Looking for ${itemName.item}`);
  } else {
    res.status(404).send("Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
