const add = document.querySelector('.add');
 sub = document.querySelector('.subtract');
 divide = document.querySelector('.divide')
 multiply = document.querySelector('.multiply')
 equal = document.querySelector('.equals')
 resultInput = document.getElementById('result')
let ans = ''
let operator;

const btn = document.querySelectorAll('.numbers ').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!operator){
            ans += e.target.innerText;
            resultInput.value = ans;
        }else {
            ans += e.target.innerText;
            resultInput.value = ans;
        }
    })
})

const op = document.querySelectorAll('.operators ').forEach(op => {
    op.addEventListener('click', (e) => {
        ans += e.target.innerText
        resultInput.value = ans;
    }) 
})

function equals(){
    try{
        resultInput.value = eval(ans);
    }catch{
        resultInput.value = 'Error'
    }
} 

const clears = document.querySelectorAll('.clear').forEach(clears =>{
    clears.addEventListener('click', (e) =>{
        ans = ''
        resultInput.value = ''
    })
})