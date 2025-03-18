import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("PostgreSQL connection error", err));

const mongoClient = new MongoClient(process.env.MONGO_URI || "mongodb://mongo:mongo_password@localhost:27017");
mongoClient.connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error", err));

// Routes
app.get("/api/hello", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT 'Hello from PostgreSQL!' as message");
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to PostgreSQL" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
