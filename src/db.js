import { Client } from 'pg';
import "dotenv/config";

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect()
  .then(() => console.log("✅ connected to PostgreSQL"))
  .catch(err => console.error("❌ connection error:", err));

export default client;
