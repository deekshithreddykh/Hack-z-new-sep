import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { TeamRegistrationPayload, TeamRegistrationRecord } from '../models/types.js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

export async function createRegistration(payload: TeamRegistrationPayload): Promise<TeamRegistrationRecord> {
  const regNumber = Math.floor(1000 + Math.random() * 9000);
  const registrationId = `HZ26-${regNumber}`;

  const record: TeamRegistrationRecord = {
    id: crypto.randomUUID(),
    registrationId,
    ...payload,
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  };

  if (supabase) {
    const { error } = await supabase.from('registrations').insert([
      {
        registration_id: registrationId,
        team_name: payload.teamName,
        domain: payload.domain,
        project_idea: payload.idea,
        leader_name: payload.leaderName,
        leader_usn: payload.leaderUsn,
        leader_year: payload.leaderYear,
        leader_section: payload.leaderSection,
        leader_phone: payload.leaderPhone,
        leader_email: payload.leaderEmail,
        members_count: payload.members.length + 1,
        members: payload.members,
        status: 'CONFIRMED'
      }
    ]);

    if (error) {
      console.error('Supabase DB error:', error);
    }
  }

  return record;
}

export async function getAllRegistrations() {
  if (supabase) {
    const { data, error } = await supabase.from('registrations').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }
  return [];
}
