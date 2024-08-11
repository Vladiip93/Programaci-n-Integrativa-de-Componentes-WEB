import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

export async function connectToDatabase() {
  try {
    await pool.getConnection();
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
  }
}

export default pool;