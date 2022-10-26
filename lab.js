//Tallest Mountain
;
var mountains = [
    { "name": "Kilimanjaro", "height": 19341 },
    { "name": "Everest", "height": 29029 },
    { "name": "Denali", "height": 20310 },
];
function findNameOfTallestMountain(mountain) {
    var max = mountain.reduce(function (a, b) { return a.height > b.height ? a : b; });
    return max.name;
}
var mountainAnswer = findNameOfTallestMountain(mountains);
console.log(mountainAnswer);
;
var products = [
    { "name": "Cheese", "price": 3 },
    { "name": "Eggs", "price": 2 },
    { "name": "4K 60 Inch TV", "price": 600 }
];
function calcAverageProductPrice(product) {
    var avg = product.reduce(function (total, item) { return total + item.price; }, 0) / product.length;
    return avg;
}
var productAnswer = calcAverageProductPrice(products);
console.log(productAnswer);
;
var inventory = [
    { product: { name: "motor", price: 10.00 }, "quantity": 10 },
    { product: { name: "sensor", price: 12.50 }, "quantity": 4 },
    { product: { name: "LED", price: 1.00 }, "quantity": 20 }
];
function calcInventoryValue(inv) {
    var total = inv.reduce(function (total, item) { return total + (item.product.price * item.quantity); }, 0);
    return total;
}
var inventoryAnswer = calcInventoryValue(inventory);
console.log(inventoryAnswer);
//# sourceMappingURL=lab.js.map