const buttons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const operatorButton = document.querySelectorAll('.operator');
let output = '';
let value = [];
let i = 0;
let j = 0;
let answer = [];
let initChoice = [''];


initialize();
function initialize(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
        value[i] = (value[i] || '') + button.textContent;
        result.textContent += button.textContent;
    });
});

    operatorButton.forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            result.textContent += ' ' + operatorButton.textContent + ' ';
            initChoice[i] = operatorButton.textContent;
            operatorCheck();
            if(result.textContent === ''){
                result.textContent = initChoice[i] + ' ';
            }
            if(value[i] === undefined){
                result.textContent = '';
            }
            i++;
        })
    })

    equalsButton.addEventListener('click', () => {
        operatorCheck();
        result.textContent = parseFloat(answer[j-1]);
    })



    deleteButton.addEventListener('click', () => {
        resetting();
        result.textContent = '';
        result.textContent = '';
    })

    
}

function operatorCheck() {   

     switch(initChoice[i-1]) {
        case '*':
            multiply();
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '/':
            divide();
            break;
     }
}

function resetting() {
    value = [];
    answer = [];
    initChoice = [];
    i = 0;
    j = 0;
    
}

function multiply(){
    if(value[i] === undefined || value[i-1] === undefined){
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = value[i-1] * value[i];
        }else {
            answer[j] = answer[j-1] * value[i];
        }
        answer[j] = answer[j].toFixed(3)
        result.textContent = '';
        result.textContent = parseFloat(answer[j])+ ' ' + initChoice[i] + ' ';
        j++;
    }
}

function add() {
    if(value[i] === undefined || value[i-1] === undefined){
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) + parseFloat(value[i]);
        }else {
            answer[j] = parseFloat(answer[j-1]) + parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)
        result.textContent = '';
        result.textContent = parseFloat(answer[j]) + ' ' + initChoice[i] + ' ';
        j++;
    }
}

function subtract() {
    if(value[i] === undefined || value[i-1] === undefined){
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) - parseFloat(value[i]);
        }else {
            answer[j] = parseFloat(answer[j-1]) - parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)
        result.textContent = '';
        result.textContent = parseFloat(answer[j])+ ' ' + initChoice[i] + ' ';
        j++;
    }
}

function divide(){
    if(value[i] === undefined || value[i-1] === undefined){
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) / parseFloat(value[i]);
            
        }else {
            answer[j] = parseFloat(answer[j-1]) / parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)
        result.textContent = '';
        result.textContent = parseFloat(answer[j])+ ' ' + initChoice[i] + ' ';
        j++;
    }
}