

export async function GET(request) {

    try{
        const response = await fetch("https://latency-check.eu-gcpcontentstackapps.com/api/hello");
        const body= await response.text()
        console.log(body)
        return new Response(body, {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          });
    }catch (error) {console.log('error', error);}
        
}