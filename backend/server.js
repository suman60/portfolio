import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Render will provide the PORT environment variable
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app in production
app.use(express.static(path.join(__dirname, '../dist')));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Handle React routing in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Current directory:', __dirname);
  console.log('Static files path:', path.join(__dirname, '../dist'));
}); 