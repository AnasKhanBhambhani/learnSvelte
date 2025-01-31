import { products } from "$lib/products";
import { json } from "@sveltejs/kit";

export function GET(){
    return json(products);
}
export async function POST(event){
const {request} = event;
const {name} = await request.json();
const newProduct = {
        id:products.length+1,
        name
}
products.push(newProduct);
return json( newProduct, {status:201})
}