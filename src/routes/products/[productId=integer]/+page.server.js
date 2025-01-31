import { error, redirect } from '@sveltejs/kit';

export const load = async(serverloadEvent)=>{
    const {fetch, params, url, route} = serverloadEvent;
    const {productId} = params;
    if(productId>5){
        throw redirect(307, '/products')
    }
    const title = 'Product Detail'
const response = await fetch(`http://localhost:4000/products/${productId}`);
const products = await response.json();
return {
    title,
    products
}
}