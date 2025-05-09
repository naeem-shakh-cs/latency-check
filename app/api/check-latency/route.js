

export async function GET(request) {
    const myHeaders = new Headers();
    myHeaders.append("x-request-origin", "launch_cdn_cloudflare");
    myHeaders.append("Host", "conforama-nextjs.eu-gcpcontentstackapps.com");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    try{

        const startTime = Date.now();
        const response = await fetch("https://eu-gcpcontentstackapps.contentstack.com/api/v1/corecommerce/ping?test=abcd", requestOptions);
        const endTime = Date.now();
        return new Response(JSON.stringify({duration: endTime-startTime}), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          })
    }catch (error) {console.log('error', error);}
        
}