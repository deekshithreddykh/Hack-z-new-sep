import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleRegister, handleGetRegistrations } from './controllers/registrationController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', event: 'HACK Z 2026', timestamp: new Date() });
});

// API Routes
app.post('/api/register', handleRegister);
app.get('/api/registrations', handleGetRegistrations);

app.listen(PORT, () => {
  console.log(`⚡ HACK Z 2026 Backend Service running on port ${PORT}`);
});
