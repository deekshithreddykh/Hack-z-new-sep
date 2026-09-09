import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.teamName || !body.leaderName || !body.leaderUsn) {
      return NextResponse.json({ error: 'Missing mandatory squad fields' }, { status: 400 });
    }

    if (supabase) {
      const { data, error } = await supabase.from('registrations').insert([
        {
          registration_id: body.regId,
          team_name: body.teamName,
          domain: body.domain,
          project_idea: body.idea,
          leader_name: body.leaderName,
          leader_usn: body.leaderUsn,
          leader_year: body.leaderYear,
          leader_section: body.leaderSection,
          leader_phone: body.leaderPhone,
          leader_email: body.leaderEmail,
          members_count: body.membersCount,
          members: body.members,
          status: 'CONFIRMED'
        }
      ]);

      if (error) {
        console.error('Supabase insert error:', error);
      }
    }

    return NextResponse.json({ success: true, registration: body });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process registration' }, { status: 500 });
  }
}
