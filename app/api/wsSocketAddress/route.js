import { ws_connection } from "@/reusable/variables/connection";

export async function POST(req) {
  const { data } = await req.json();

  if (ws_connection) {
    return new Response(JSON.stringify({ ok: true, data: ws_connection }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ ok: false, data: "Method not allowed" }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    }
  );
}
