// Supabase Edge Function: register-team
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();
    const regNumber = Math.floor(1000 + Math.random() * 9000);
    const registrationId = `HZ26-${regNumber}`;

    const { data, error } = await supabase.from("registrations").insert([
      {
        registration_id: registrationId,
        team_name: body.teamName,
        domain: body.domain,
        project_idea: body.idea,
        leader_name: body.leaderName,
        leader_usn: body.leaderUsn,
        leader_year: body.leaderYear,
        leader_section: body.leaderSection,
        leader_phone: body.leaderPhone,
        leader_email: body.leaderEmail,
        members_count: (body.members?.length || 0) + 1,
        members: body.members || [],
        status: "CONFIRMED",
      },
    ]).select().single();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, registration: data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
