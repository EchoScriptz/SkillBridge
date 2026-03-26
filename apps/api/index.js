import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Resolve paths for Windows/Linux compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Load .env explicitly from the current directory
dotenv.config({ path: path.join(__dirname, '.env') });

// 3. Import routes (Ensure these paths match your actual files)
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import itemRoutes from './routes/item.routes.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

// --- SAFETY CHECK FOR DEVS ---
if (!process.env.JWT_SECRET) {
  console.warn('⚠️  WARNING: JWT_SECRET not found in .env. Using fallback for development.');
  process.env.JWT_SECRET = 'skillbridge_dev_secret_2026'; 
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    env: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString() 
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Connect to MongoDB & Start Server
async function startServer() {
  let mongoUri = process.env.MONGO_URI;

  try {
    // Attempt connection to MongoDB Atlas/Local
    if (!mongoUri) throw new Error('MONGO_URI not defined');
    
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Faster fail for hackathon speed
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.warn('⚠️  External MongoDB failed:', err.message);
    console.warn('⚠️  Falling back to in-memory database...');
    
    try {
      // Lazy load memory server to keep production builds light
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      mongoUri = mongod.getUri();
      await mongoose.connect(mongoUri);
      console.log('✅ In-memory MongoDB active (Data will wipe on save/restart)');
    } catch (memErr) {
      console.error('❌ CRITICAL: No database available:', memErr.message);
      process.exit(1); // Exit if no DB can be started
    }
  }

  app.listen(PORT, () => {
    console.log(`🚀 SkillBridge API: http://localhost:${PORT}`);
    console.log(`📡 Proxy Target for Vite: http://localhost:${PORT}`);
  });
}

startServer();

export default app;