
export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

// unexported
function multiply(x,y){
    return x * y;
}

// default export
const Calculator = { add, subtract, multiply };
export default Calculator;