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
    return (a/b).toFixed(1)
}

function operate(operator,a,b){
    switch (operator){
        case '+':
            return add(a,b)
        case'-':
            return subtract(a,b)
        case '/':
            if(b>0){
                return divide(a,b)
            }
            return 'Error: can\'t divide by 0'
        case '*':
            return multiply(a,b)
        default: 
            console.log(result)
    }
}

// helper functions
function setNumber(e){
    let val = e.target.innerText
    if(currentNum){
        if(currentNum.includes('.') && val == '.'){
            return
        }
    }
    if(display.innerText === 0 || display.innerText === "0"){
        display.innerText = val
        currentNum = val
        return
    }
    if(operator && !currentNum){
        display.innerText = val
        currentNum = val
        return
    }
    display.innerText += val
    currentNum += val
}

function updateDisplay(e){
    let val = e.target.innerText
    switch(val){
        case 'Clear':
            prevNum = null
            currentNum = null
            operator = undefined
            result = null

            display.innerText = 0
            break
        case '+':
            if(!prevNum){
                prevNum = currentNum
                currentNum = null
                operator = '+'
                break
            }
            if(prevNum && currentNum && operator){
                result = operate(operator,parseFloat(prevNum),parseFloat(currentNum))
                prevNum = result
                currentNum = null
                operator = '+'
                display.innerText = result
            }
        case '-':
            if(!prevNum){
                prevNum = currentNum
                currentNum = null
                operator = '-'
                break
            }
            if(prevNum && currentNum && operator){
                result = operate(operator,parseFloat(prevNum),parseFloat(currentNum))
                prevNum = result
                currentNum = null
                operator = '-'
                display.innerText = result
            }
        case '*':
            if(!prevNum){
                prevNum = currentNum
                currentNum = null
                operator = '*'
                break
            }
            if(prevNum && currentNum && operator){
                result = operate(operator,parseFloat(prevNum),parseFloat(currentNum))
                prevNum = result
                currentNum = null
                operator = '*'
                display.innerText = result
            }
        case '/':
            if(!prevNum){
                prevNum = currentNum
                currentNum = null
                operator = '/'
                break
            }
            if(prevNum && currentNum && operator){
                result = operate(operator,parseFloat(prevNum),parseFloat(currentNum))
                prevNum = result
                currentNum = null
                operator = '/'
                display.innerText = result
            }
        case '=':
            if(prevNum && currentNum && operator){
                result = operate(operator,parseFloat(prevNum),parseFloat(currentNum))
                prevNum = null
                currentNum = result
                display.innerText = result
                break
            }
        default:
            console.log(prevNum,currentNum,operator)
            break
            
            
    }
    
}


// main logic
// elements
let numberButtons = [...document.querySelectorAll('.number')]
let operatorButtons = [...document.querySelectorAll('.operator')]
let display = document.querySelector('.display')
display.innerText = 0

let prevNum = null
let currentNum = null
let operator = null
// let operator2 = null
let result = null


//map through buttons and add event listeners to update display
numberButtons.map(btn=>{
    btn.addEventListener('click',(e)=>{
        setNumber(e)
    })
})

operatorButtons.map(btn=>{
    btn.addEventListener('click',(e)=>{
        updateDisplay(e)
    })
})
// console.log(add(1,2))
// console.log(multiply(1,2))
// console.log(divide(1,2))
// console.log(subtract(2,1))
// console.log(operate("/",4,2))