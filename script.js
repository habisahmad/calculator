const add = document.querySelector('.add');
 sub = document.querySelector('.subtract');
 divide = document.querySelector('.divide')
 multiply = document.querySelector('.multiply')
 equal = document.querySelector('.equals')
 resultInput = document.getElementById('result')
let a = [];
let b = [];
let operator;
let sum; 

function addition(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    if(operator === '+'){
        return addition(num1, num2)
    }else if(operator === '-'){
        return subtract(num1, num2)
    }else if(operator === '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2)
    }
}

const btn = document.querySelectorAll('.numbers ').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!operator){
            a += e.target.innerText;
            console.log(a)
        }else {
            b += e.target.innerText;
            console.log(b)
        }
    })
})

const op = document.querySelectorAll('.operators ').forEach(op => {
    op.addEventListener('click', (e) => {
        if(a == []){
            resultInput.value = 'Error'
        }else{
            operator = e.target.innerText;
            console.log(operator)
        }
    })
})

function equals(){
    operate(a, b, operator)
}