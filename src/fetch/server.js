import {cookies} from "next/headers";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const BASE_URL = process.env.BASE_URL;
export default async function serverFetch(parameters,options = {}) {
    const token = cookies().get('token');
    //NODE_TLS_REJECT_UNAUTHORIZED=0

    // const options ={}

    const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token.value}` : '',
        accept: 'application/json'
    };
    // ca bundle inside the options



    let queryString = '';

    if (parameters[1]) {
        queryString = new URLSearchParams(parameters[1]).toString();
    }

    // const response = await fetch(`${BASE_URL}${url}`, {...options, headers , params});

    const fullUrl = queryString ? `${BASE_URL}${parameters[0]}?${queryString}` : `${BASE_URL}${parameters[0]}`;


    const response = await fetch(fullUrl, { ...options, headers });


    if (response.status === 401) {
        /*   console.log('fetch 401', response);*/
    }
    if (!response.ok) {
        console.log('fetch not ok', response);
        // throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}