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

// Log environment details
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', PORT);
console.log('Current directory:', __dirname);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server with explicit host binding
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Server is listening on all available network interfaces (0.0.0.0)');
  
  // Log all listening addresses
  const addresses = server.address();
  console.log('Server address details:', addresses);
}); 