export const load = async(serverloadEvent)=>{
    const {fetch} = serverloadEvent;
    const title = 'List of available Products'
const response = await fetch('http://localhost:4000/products');
const products = await response.json();
return {
    title,
    products
}
}