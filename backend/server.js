import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express
const app = express();

// Essential middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Get port from environment
const PORT = process.env.PORT || 3000;

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Process ID:', process.pid);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Host:', process.env.HOST);
  console.log('Port:', PORT);
  
  const serverInfo = server.address();
  console.log('Server Info:', {
    address: serverInfo.address,
    port: serverInfo.port,
    family: serverInfo.family
  });
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server Error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  }
});

// Handle process termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal. Closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}); 