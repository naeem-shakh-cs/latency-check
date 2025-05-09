

export const dynamic = 'force-dynamic';
export async function GET(request) {

    try{

        const startTime = Date.now();
        const response = await fetch("https://latency-check.eu-gcpcontentstackapps.com/api/hello");
        const endTime = Date.now();
        const body= await response.text()
        console.log("request - response time from region", endTime-startTime)
        return new Response(body, {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          });
    }catch (error) {console.log('error', error);}
        
}