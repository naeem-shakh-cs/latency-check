export const dynamic = 'force-dynamic';
export async function GET(request) {
  const now = Date.now();
  const url = new URL(request.url);
  return new Response(
    JSON.stringify({
      message: "helloworld!",
      EdgeRequestReceivedTimestamp: url.searchParams.get('t'),
      cloudfunctionTimestamp: Date.now(),
      durationtoReachCloudFunction: `${now - url.searchParams.get('t')} ms`,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
