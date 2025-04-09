import pkg from "pg";
const { Client } = pkg;

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

  if (process.env.DB_USER === undefined) throw Error('The DB_USER is undefined');
  if (process.env.DB_HOST === undefined) throw Error('The DB_HOST is undefined');
  if (process.env.DB_NAME === undefined) throw Error('The DB_NAME is undefined');
  if (process.env.DB_PASSWORD === undefined) throw Error('The DB_PASSWORD is undefined');
  if (process.env.DB_PORT === undefined) throw Error('The DB_PORT is undefined');


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

