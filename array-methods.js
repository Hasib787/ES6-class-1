const products = [
    {name: "laptop", price: 1000, brand: "hp", color: "black"},
    {name: "mouse", price: 100, brand: "hp", color: "brown"},
    {name: "keyboard", price: 200, brand: "logitech", color: "black"},
    {name: "monitor", price: 500, brand: "Dell", color: "white"},
    {name: "camera", price: 1000, brand: "canon", color: "black"},
];

//Map 
const productName = products.map(product => product.name);
console.log(productName);

//forEach
products.forEach(productBrand=> console.log(productBrand.price));

// filter
const chipProduct = products.filter(product => product.price <600 && product.brand === 'Dell');
console.log(chipProduct);
const spesalName =products.filter(pd => pd.name.includes('a'));
console.log(spesalName);


//find
const damiProduct = products.find(product => product.price >= 1000);
console.log(damiProduct); 



