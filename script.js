const add = document.querySelector('.add');
 sub = document.querySelector('.subtract');
 divide = document.querySelector('.divide')
 multiply = document.querySelector('.multiply')
 equal = document.querySelector('.equals')
 resultInput = document.getElementById('result')
let ans = ''
let operator;

const btn = document.querySelectorAll('.numbers button').forEach(btn => {
    if(btn.id != 'equals'){ // Excludes equal from event listener
        btn.addEventListener('click', (e) => {
            ans += e.target.innerText;
            resultInput.value = ans;
        })
    }
})

function equals(){
    try{
        resultInput.value = eval(ans);
    }catch{
        resultInput.value = 'Error'
        ans = ''
    }
} 

const clears = document.querySelectorAll('.clear ').forEach(clears =>{
    clears.addEventListener('click', (e) =>{
        ans = ''
        resultInput.value = ''
    })
})