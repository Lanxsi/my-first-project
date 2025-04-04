import pkg from "pg";
const { Client } = pkg;

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

if (process.env.DB_PORT === undefined) throw Error('The DB_PORT is undefined');

// TODO В тебе значення user, host, database, password можуть бути undefined на них теж перевірки, по нормальному перевіряй всі значення з process.env
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT as number,
});


client.connect()
  .then(() => console.log("✅ PostgreSQL is ready"))
  .catch(err => console.error("❌ Failed to connect to DB:", err));

export default client;

