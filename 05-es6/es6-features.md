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

```
## arrow functions
```js

```
## iterators (for..of)
```js

```
## symbols
```js

```
## template strings
```js

```
## classes & inheritance
```js

```