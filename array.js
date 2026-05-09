//console.log(adults)

//find
const studentsNames = ["john" , "john" , "Ada" , "doe" , "jane" , "smith" , "Bola" , "john"]
const found = studentsNames.find((name)=>{
    return name === "john"
})
console.log(found)

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000];

let total = cartPrices.reduce(function (acc, currentPrice){
    return acc + currentPrice;
})
console.log(total);

//Arrow function version
let grandTotal = cartPrices.reduce((acc, price) =>{
    return acc + price;
})
console.log (grandTotal);

//push, pop, shift, unshift
let colors = ["red" , "blue" , "green"];
colors.push ("yellow");

let lastcolor = colors.pop ();
console.log(colors);

console.log(lastcolor);

let firstcolor = colors.shift ();
console.log(colors);
console.log(firstcolor)

let newLength = colors.unshift ("pupple");
console.log(colors);
console.log(newLength);