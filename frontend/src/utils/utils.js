const total = [];
//gets all price values froms static query
const addAllPrices = async (price) => {
  const value = price.replace(/\$/g, '');  
  total.push(Number(value)); 
}
 
