const add = document.querySelector('.add');
 sub = document.querySelector('.subtract');
 divide = document.querySelector('.divide')
 multiply = document.querySelector('.multiply')
 equal = document.querySelector('.equals')
 resultInput = document.getElementById('result')
let a = '';
let b = '';
let operator;
let sum; 

function addition(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiple(a, b){
    return parseInt(a) * parseInt(b);
}

function division(a, b){
    return parseInt(a) / parseInt(b);
}

function operate(num1, num2, operator){
    if(operator === '+'){
        return addition(num1, num2)
    }else if(operator === '-'){
        return subtract(num1, num2)
    }else if(operator === '*'){
        return multiple(num1, num2);
    }else if(operator == '/'){
        return division(num1, num2)
    }
}

const btn = document.querySelectorAll('.numbers ').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!operator){
            a += e.target.innerText;
            resultInput.value = a;
        }else {
            b += e.target.innerText;
            resultInput.value = b;
        }
    })
})

const op = document.querySelectorAll('.operators ').forEach(op => {
    op.addEventListener('click', (e) => {
        if(a != '' && b != ''){
            equals();
        }
        if(a == ''){
            resultInput.value = 'Error'
        }else{
            operator = e.target.innerText;
            resultInput.value = operator
        }
    })
})

function equals(){
    sum = operate(a, b, operator)
    resultInput.value = sum;
    a = sum
    b = []
}