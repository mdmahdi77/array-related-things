const numbers = [2, 4, 5, 7, 5];
const friends =["rofiq", "jobber", "borkot"];
const products = [
    {id: 1, name: "laptop", price: 500},
    {id: 2, name: "phone", price: 100},
    {id: 3, name: "watch", price: 80},
    {id: 4, name: "tablet", price: 90}
];

//map
const names = products.map(product => product.name)
const prices = products.map(productPrice => productPrice.price)  //sorasori ek line output ber korte hole
const prices2 = products.map(product =>{
    return product.price
    //second bracket diye multiline diye output ber korte hole
})
// console.log(names)
// console.log(prices2)

//forEach
products.forEach(product => console.log(product.name))

//filter
const cheaper = products.filter(product => product.price < 100)
// console.log(cheaper) // price er dam 100 theke kom tader ber korar function
const remaining = products.filter(product => product.id != 3)
// console.log(remaining)  //nirdisto kore id bad deyar function

const hashWatch = products.find(product => product.name === 'watch');
console.log(hashWatch)