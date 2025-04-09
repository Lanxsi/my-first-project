import client from "./db.js"; 
import { QueryResult } from "pg";

interface User {
  id: number, 
  name: string, 
  surname: string, 
  full_name: string,
  email: string,
  password: string;
}

async function addUser(name: string, surname: string, full_name: string, email: string, password: string): Promise<void> {
  const query = `
    INSERT INTO users (name, surname, full_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  try {
    const result: QueryResult<User> = await client.query(query, [name, surname, full_name, email, password]);
    console.log("✅ User added:", result.rows[0]);
  } catch (err: unknown) {
    if (err instanceof Error) {
    console.error("❌ Error adding a user:", err);
    }
  }
}

export { addUser };
