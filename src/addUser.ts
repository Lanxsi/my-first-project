import client from "./db.js"; 

// TODO ти маєш показувати що функція повертає завжди. якщо вона повертає нічого то зазнач це - Promise<undefined>

async function addUser(name: string, surname: string, full_name: string, email: string, password: string) {
  const query = `
    INSERT INTO users (name, surname, full_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  try {
    const result = await client.query(query, [name, surname, full_name, email, password]);
    console.log("✅ User added:", result.rows[0]);
  } catch (err) {
    console.error("❌ Error adding a user:", err);
  }
}

export { addUser };
