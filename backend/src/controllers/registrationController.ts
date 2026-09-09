import { Request, Response } from 'express';
import { createRegistration, getAllRegistrations } from '../services/supabaseService.js';
import { TeamRegistrationPayload } from '../models/types.js';

export async function handleRegister(req: Request, res: Response) {
  try {
    const payload: TeamRegistrationPayload = req.body;

    if (!payload.teamName || !payload.leaderName || !payload.leaderUsn || !payload.leaderPhone) {
      return res.status(400).json({ error: 'Missing mandatory squad registration details' });
    }

    const record = await createRegistration(payload);
    return res.status(201).json({ success: true, registration: record });
  } catch (error: any) {
    console.error('Registration failed:', error);
    return res.status(500).json({ error: 'Internal server error while registering squad' });
  }
}

export async function handleGetRegistrations(req: Request, res: Response) {
  try {
    const data = await getAllRegistrations();
    return res.json({ success: true, data });
  } catch (error: any) {
    console.error('Failed to fetch registrations:', error);
    return res.status(500).json({ error: 'Failed to fetch registrations' });
  }
}
