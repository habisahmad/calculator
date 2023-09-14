const add = document.querySelector('.add');
 sub = document.querySelector('.subtract');
 divide = document.querySelector('.divide')
 multiply = document.querySelector('.multiply')
 equal = document.querySelector('.equals')
 resultInput = document.getElementById('result')
let a;
let b ;
let operator;

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

function operate(num1, num2){
    if(operator === '+'){
        return add(num1, num2)
    }else if(operator === '-'){
        return subtract(num1, num2)
    }else if(operator === '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return 
    }
}

const btn = document.querySelectorAll('.numbers ').forEach(btn => {
    btn.addEventListener('click', (e) => {
        inputValue(e.target.innerText)
    })
})

function inputValue(number){
    resultInput.value = number;
}