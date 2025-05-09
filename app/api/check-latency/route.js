
export const dynamic = 'force-dynamic';
export async function GET(request) {
  const myHeaders = new Headers();
myHeaders.append("x-request-origin", "launch_cdn_cloudflare");
myHeaders.append("Host", "conforama-nextjs.eu-gcpcontentstackapps.com");
myHeaders.append("Cookie", "JSESSIONID=FD051C1D8528D49C625A14D8F20EF9A7.accstorefront-b48598c45-cs2ld; ROUTE=.accstorefront-b48598c45-cs2ld; confoMagasinCookie=BONDY; language=fr");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
  redirect: "follow"
    };

    try{

        const startTime = Date.now();
        const response = await fetch("https://eu-gcpcontentstackapps.contentstack.com/api/v1/corecommerce/ping", requestOptions);
        console.log(await response.text())
        const endTime = Date.now();
        return new Response(JSON.stringify({duration: endTime-startTime}), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          })
    }catch (error) {console.log('error', error);}
        
}