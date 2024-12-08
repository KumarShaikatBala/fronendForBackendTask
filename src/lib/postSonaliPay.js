// server side data post request
import serverFetch from "@/fetch/server";

export default async function postSonaliPay(data) {
    console.log(data);
    return await serverFetch('payment', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}