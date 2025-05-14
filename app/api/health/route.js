export const dynamic = 'force-dynamic';
export async function GET(request) {

  return new Response(
    JSON.stringify({status: "ok", message: "health check ok!"}),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
