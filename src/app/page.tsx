import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
export default function Home() {

  const connect = async () => {
    const client = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
    });
    const db = drizzle(client);
    console.log(db);
  }
  connect();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        First Commit
      </div>
      <button className="btn">Button</button>
    </main>
  );
}
