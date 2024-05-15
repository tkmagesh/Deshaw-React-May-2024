# ES6 Features
## let
```js
let x = 10
for(let i = 0; i < 10; i++) {
}
```
## const
```js
const pi = 3.14
const emp = { id : 100 }
```
## destructuring (array)
```js
let nos = [3,1,4,2,5]
let [x,y] = nos
```
## rest operator (array)
```js
let nos = [3,1,4,2,5]
let [x,y, ...z] = nos
```
## spread operator (array)
```js
let nos = [3,1,4,2,5]
let newNos = [...nos, 10, 20,30]
```

## rest & spread operator in function arguments
```js
function sum(...args){
    let result = 0;
    for(let idx = 0; idx < args.length; idx++)
        result += args[idx];
    return result;
}

sum(10)

sum(10,20)

sum(10,20,30,40,50)

let nos = [3,1,4,2,5]
sum(...nos)
```
## destructuring (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

let {id, cost} = product

let {id : x, cost : y} = product
```
## rest operator (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

let { id, ...z } = product
```
## spread operator (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

let productWithDiscount = { ...product, discount : 10 }
```

## object destructuring in function argments
```js
function format({id, name, cost}){
    return `id = ${id}, name = ${name}, cost = ${cost}`
}

let product = { id : 100, name : 'Pen', cost : 10 }

format(product)
```
## default parameter
```js
function add(x = 10,y = 20){
    return x + y;
}

add()

add(100)

add(undefined, 200)

add(100,200)
```
## arrow functions
```js
/*
//function statement
function add(x,y){
    return x + y;
}

// function expression
let add = function(x,y){
    return x + y
}

// arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y

add(100,200)
```
## iterators (for..of)
```js
let nos = [3,1,4,2,5]

for(let no of nos)
    console.log(no)
```
## symbols
```js
let s1 = Symbol()
    s2 = Symbol()
console.log(s1 === s2)
```
## template strings
```js
let x = 10, y = 20
let s1 = `sum of ${x} and ${y} is ${x+y}`
let s2 = `
sum of 
${x} and ${y} 
is ${x+y}
`
```
## classes & inheritance
```js
class Product{
    // private attributes
    #id = 0;

    // public attributes
    name = '';
    cost = 0;

    // accessors
    get id(){
        return this.#id;
    }

    set id(val){
        //validation
        this.#id = val;
    }

    //static attributes
    static ModelType = 'Product'

    //constructor
    constructor(id, name, cost){
        this.#id = id;
        this.name = name;
        this.cost = cost;
    }

    // instance methods
    format(){
        return `id = ${this.id}, name = ${this.name}, cost = ${this.cost}`
    }

    // static methods
    static IsProduct(val){
        return val instanceof Product;
    }
}

class PerishableProduct extends Product {
    expiry = '';

    constructor(id, name, cost, expiry){
        super(id, name, cost);
        this.expiry = expiry;
    }

    format(){
        return `${super.format()}, expiry = ${this.expiry}`
    }
}
```
## Async Operations
- callback
- promises
- async await
- observables (rxjs - https://rxjs.dev/)

## ES6 Modules
- Everything defined in a js/jsx/ts file is considered PRIVATE by default
- The public entities have to be explicitly 'EXPORT'ed
- To use the public entities from another file, it has to be explictly 'IMPORT'ed
