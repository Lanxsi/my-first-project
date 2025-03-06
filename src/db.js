import pkg from "pg";
const { Client } = pkg;

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);


const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


client.connect()
  .then(() => console.log("✅ PostgreSQL is ready"))
  .catch(err => console.error("❌ Failed to connect to DB:", err));

export default client;

