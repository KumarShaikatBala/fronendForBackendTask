import {toast} from "react-toastify";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const BASE_URL = process.env.BASE_URL;
export default async function customFetch(url, options = {}) {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const headers = {
            ...options.headers,
            Authorization: token ? `Bearer ${token}` : '',
            accept: 'application/json'
        };
        const response = await fetch(`${BASE_URL}${url}`, {...options, headers});
        if (response.status === 401) {
            if (response.url){
                window.open('https://inlandcrew.dos.gov.bd/','_blank')
            }
            else {
                console.log('fetch 401', response);
            }
        }
//         if (response.status === 422) {
//                console.log('fetch 422', response);
// 1
//         }
        if (!response.ok) {
            const data = await response.json();
            if (data.errors || data.error) {
                const errorData = data.errors || data.error;
                for (const [key, value] of Object.entries(errorData)) {
                    toast.warning(`${key} ${value}`);
                }
            }
            /*            if (data.error){
                            for (const [key, value] of Object.entries(data.error)) {
                                if (Array.isArray(value)) {
                                    value.forEach((error) => {
                                        toast.warning(`${key}: ${error}`);
                                    });
                                } else {
                                    toast.warning(`${key}: ${value}`);
                                }
                            }
                        }*/
        }
        return await response.json();
    }
}