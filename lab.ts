//Tallest Mountain

interface Mountain {
    name: string,
    height: number
};

let mountains: Mountain[] = [
    {"name":"Kilimanjaro", "height": 19341}, 
    {"name":"Everest", "height": 29029}, 
    {"name":"Denali", "height": 20310}, 
]

function findNameOfTallestMountain(mountain:Mountain[]): string {
  let max =  mountain.reduce((a, b) => a.height > b.height ? a : b);
    return max.name;
}

 let mountainAnswer = findNameOfTallestMountain(mountains);
 console.log(mountainAnswer);

 //_____________________________________________________________________

 //Products

 interface Product {
    name: string,
    price: number
 };

 let products: Product[] = [
    {"name": "Cheese", "price": 3}
    {"name": "Eggs", "price": 2}
    {"name": "4K 60 Inch TV", "price": 600}
 ]

 function calcAverageProductPrice(product:Product[]): number {
    let avg = product.reduce((total, item) => total + item.price, 0) / product.length;
    return avg;
 }

let productAnswer = calcAverageProductPrice(products);
console.log(productAnswer);

 //_____________________________________________________________________

 // Inventory

 interface InventoryItem {
    product: Product,
    quantity: number
 };

 let inventory: InventoryItem[] = [
    {product:{name : "motor", price : 10.00}, "quantity" : 10}, 
    {product:{name : "sensor", price : 12.50}, "quantity" : 4},
    {product:{name : "LED", price : 1.00}, "quantity" : 20}
 ];

 function calcInventoryValue(inv:InventoryItem[]) : number {
    let total = inv.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    return total;
 }

 let inventoryAnswer = calcInventoryValue(inventory);
 console.log(inventoryAnswer);
