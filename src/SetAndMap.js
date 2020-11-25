import Data from './Data.json';

class Produktas {
    constructor(key, title, price, quantity, imageUrl, description) {
        this.key = key;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

let productsArr = Data.map((item, index) => new Produktas(index, item.title, item.price, item.quantity, item.imageUrl, item.description));
productsArr.forEach(item => console.log("In array: " + item.title));

let productsSet = new Set(productsArr);
productsSet.forEach(item => console.log("In set: " + item.title));


let productsMap = new Map();
productsSet.forEach(item => productsMap.set(item.key, item));
console.log(productsMap);

let newProductsArray = Array.from(productsMap);
console.log(newProductsArray);
newProductsArray.forEach(item => console.log("In new array: " + item[1].title));

let reduced = newProductsArray.reduce((acc, item) => {
    return (
        acc + item[1].title + " (" + item[1].price + " eur), ")
}, "");
console.log(reduced);

let nicer = newProductsArray.map(item => {
    return (
        item[1].title + " (" + item[1].price + " eur)")
}).join(", ");
console.log(nicer);

export default productsArr;