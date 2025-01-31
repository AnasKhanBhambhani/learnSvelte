export const load = async(loadEvent)=>{
    const {fetch, data, parent} = loadEvent;
    const parentData = await parent();
    const notification = 'sale is going to be off !50%'
const response = await fetch('http://localhost:4000/products');

return {
    ...data,
    notification,
    parentData
}
}