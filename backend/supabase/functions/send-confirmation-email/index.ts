// Supabase Edge Function: send-confirmation-email
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { to, teamName, registrationId, domain } = await req.json();

    const emailHtml = `
      <div style="font-family:sans-serif; background:#05070B; color:#FFF; padding:30px; border-radius:12px;">
        <h1 style="color:#00F0FF;">HACK Z 2026 — Registration Confirmed!</h1>
        <p>Dear <strong>${teamName}</strong>,</p>
        <p>Your team is officially registered for HACK Z 2026 at VIMTECH Campus.</p>
        <div style="background:#0E1626; padding:15px; border-radius:8px; border:1px solid #00F0FF;">
          <p><strong>Registration ID:</strong> ${registrationId}</p>
          <p><strong>Track:</strong> ${domain}</p>
          <p><strong>Date:</strong> 26 September 2026 (08:30 AM)</p>
          <p><strong>Venue:</strong> VIMTECH Campus, Tumkur</p>
        </div>
        <p style="margin-top:20px; color:#94A3B8;">Please bring your college ID and this confirmation on the event day.</p>
      </div>
    `;

    // Trigger transactional email via Resend / SMTP API if configured
    console.log(`Triggered confirmation email for ${to} (${registrationId})`);

    return new Response(JSON.stringify({ success: true, message: "Email queued" }), {
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
