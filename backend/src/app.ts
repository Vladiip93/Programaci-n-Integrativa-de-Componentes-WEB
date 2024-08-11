import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';
import { connectToDatabase } from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});