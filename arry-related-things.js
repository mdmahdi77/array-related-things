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
// products.forEach(product => console.log(product.name))

//filter
const cheaper = products.filter(product => product.price < 100)
// console.log(cheaper) // price er dam 100 theke kom tader ber korar function
const remaining = products.filter(product => product.id != 3)
// console.log(remaining)  //nirdisto kore id bad deyar function

const hashWatch = products.find(product => product.name === 'watch');
// console.log(hashWatch)










//30-3 module***********************************************************


//array destructuring
const numbersArray = [77, 19, 100, 587, 4];
// const x = numbers[0]
// const y = numbers[1]
// const [x, y] = [58, 92]

// const [x, y]= numbers

// console.log(x, y)

// function box(num1){
//     return [num1, num1 + 5]
// }
// const [box1, box2] = box(8)
// console.log(box1, box2)


// const person = {id: 1, money: 40, name: "rohim", age: 25}
//bar bar person. dite hocce
// console.log(person.name, person.age)

// const {name, age} = {id: 1, money: 40, name: "rohim", age: 25}
// console.log(name, age) //etai mulot object destructure er subidha


// create Object shortcut
const one = 25
const two = 30
const obj = {one: one, two: two}
const obj2 = {one, two}
// console.log(one, two)


//new array create using three dots
// numbersArray.push(56)  // push er maddome 56 array er modde samne thakbe
const newNumbers = [...numbersArray, 56]
// console.log(newNumbers)











//30-4 module***********************************************************

// const money = 150;
// let food;
// if(money > 100){
//     food = "biriani"
// }else{
//     food = "alu vorta pabe"
// }


//tinary condition
// condition ? true value : false value
const money = 150
let food = money > 100 ? "biriani pabe" : "alu vorta pabe"
// console.log(food)  uporer 7 line er conditon 1 line a korar trics eke tinary bole


// const active = false;

// if(active === true){
//     cssClass = "active"
// }else{
//     cssClass = "inActive"
// }

// const cssClass2 = active ? "active" : "inActive"

//function call shortcut alternative
// active ? displayUser() : hideUser() // evabeu kora jabe

//jodi sudu 1ta true condition mane sudu if thakbe else thakbe na....tahole evabe korte hobe
// active && displayUser() //tothoba
// active || displayUser()

const active = true
const x = active && 5 //jodi true hoi tahole 5 asbe, nahole false asbe
const y = active || 5  //jodi true hoi tahole 5 asbe na,,jodi false hoi tahole 5 asbe
// console.log(x)

//string to number
const number = +'45'

//number to string
const string = 45 + '';

//default parameter
function add(num1, num2 = 5){
    //num2 = num2 || 5  jodi opore num2 default parameter na theke tahole undefined hobe,,,r undefined hole 5 hobe
    return num1 + num2
}
add(45)//ekhane 45 num1 er value,, r num2 two er to default parameter deya ace
