import { db } from "@vercel/postgres";

export async function testDatabaseConnection() {
  try {
    const client = await db.connect();
    console.log("Database connection successful!");
    await client.release(); // Release the connection
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
