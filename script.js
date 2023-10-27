const buttons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const operatorButton = document.querySelectorAll('.operator');
const backspaceButton = document.querySelector('#backspace');
let output = '';
let value = [];
let i = 0;
let j = 0;
let answer = [];
let initChoice = [''];
let testStore = [];
let clickedAnswer = false;

initialize();
function initialize(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(clickedAnswer === true){
                result.textContent = '';
                value[i] = (value[i] || '') + button.textContent;
                output += testStore[i];
                result.textContent += button.textContent;
                clickedAnswer = false;
            }else {
                value[i] = (value[i] || '') + button.textContent;
                output += button.textContent;
                result.textContent += button.textContent;
            }
        
    });
});

    operatorButton.forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            output += ' ' + operatorButton.textContent + ' ';
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
        if(value[i] === undefined || value[i-1] === undefined){
            return;
        }else{
        operatorCheck();
        result.textContent = parseFloat(answer[j-1]);
        clickedAnswer = true;
        resetting();
        }
    })

    backspaceButton.addEventListener('click', () => {
        if (value[i] !== undefined) {
            const currentNumber = value[i].toString();
            if (currentNumber.length > 1) {
                value[i] = parseFloat(currentNumber.slice(0, -1));
            } else {
                value.pop();
                i--;
            }
            output = output.slice(0, -1);
            result.textContent = result.textContent.slice(0, -1);
            if (output.charAt(output.length - 1) === ' ') {
                output = output.slice(0, -3);
                result.textContent = result.textContent.slice(0, -3);
                i--; 
            }
        }
    });


    deleteButton.addEventListener('click', () => {
        resetting();
        result.textContent = '';
    })

    
}

function operatorCheck() {   

     switch(initChoice[i-1]) {
        case 'x':
            multiply();
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '÷':
            divide();
            break;
     }
}

function resetting() {
    value = [];
    answer = [];
    initChoice = [];
    output = '';
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
        if(value[i] == 0 || value[i-1] == 0){
            value=[];
            return;
        }else {
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
}