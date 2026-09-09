-- ========================================================
-- HACK Z 2026 SUPABASE POSTGRESQL SCHEMA
-- Vaisiri Institute of Management & Technology (VIMTECH)
-- ========================================================

CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id TEXT UNIQUE NOT NULL,
  team_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  project_idea TEXT,
  leader_name TEXT NOT NULL,
  leader_usn TEXT NOT NULL,
  leader_year TEXT NOT NULL,
  leader_section TEXT NOT NULL,
  leader_phone TEXT NOT NULL,
  leader_email TEXT NOT NULL,
  members_count INT NOT NULL DEFAULT 3,
  members JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'CONFIRMED',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexing for fast search in Admin Dashboard
CREATE INDEX IF NOT EXISTS idx_reg_id ON public.registrations(registration_id);
CREATE INDEX IF NOT EXISTS idx_team_name ON public.registrations(team_name);
CREATE INDEX IF NOT EXISTS idx_domain ON public.registrations(domain);
CREATE INDEX IF NOT EXISTS idx_leader_usn ON public.registrations(leader_usn);

-- Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow Public Submissions (Students registering their squad)
CREATE POLICY "Public can register squads" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow Public / Dashboard reading of registered squads
CREATE POLICY "Public and Admin can view squads" 
ON public.registrations 
FOR SELECT 
USING (true);
