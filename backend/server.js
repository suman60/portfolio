import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Immediately load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Ensure we get the port from Render's environment
const PORT = process.env.PORT || 3000;

// Middleware - keep this minimal for initial binding
app.use(express.json());

// Create server immediately
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Server address: ${JSON.stringify(server.address())}`);
});

// After server is bound, add remaining middleware and routes
server.on('listening', () => {
  // Add CORS after server is running
  app.use(cors());

  // Serve static files
  app.use(express.static(path.join(__dirname, '../dist')));

  // Test route
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend server is running!' });
  });

  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  console.log('All routes and middleware configured');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Static files path:', path.join(__dirname, '../dist'));
});

// Error handling
server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  }
}); 