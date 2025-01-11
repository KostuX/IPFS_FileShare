import myValidator from "@/helper/myValidator";
import openWS from "@/utils/server/ws/openSock";

export async function POST(req) {
  const { type, data } = await req.json();

  const validator = new myValidator();
  const validation = validator.cid(data);

  const wss = await openWS();
  const wssAddress = wss.address();

  return new Response(JSON.stringify({ ok: true, message: wssAddress }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  if (validation.ok) {
    return new Response(JSON.stringify({ ok: true, message: wssAddress }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(
      JSON.stringify({ ok: false, message: validation.err.join(" ") }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ ok: false, message: "Method not allowed" }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    }
  );
}
