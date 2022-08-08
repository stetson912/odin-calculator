// math functions

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator,a,b){
    switch(operator){
        case '+':
            return add(a,b)
        case '-': 
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
        default:
            return "Invalid Operation Occured"
    }
}
// console.log(add(1,2))
// console.log(multiply(1,2))
// console.log(divide(1,2))
// console.log(subtract(2,1))
// console.log(operate("/",4,2))