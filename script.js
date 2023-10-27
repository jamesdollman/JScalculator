const buttons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const operatorButton = document.querySelectorAll('.operator');
const testResult = document.querySelector('#prelimResult');
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
        result.textContent = 'Answer: ' + answer[j-1];
    })



    deleteButton.addEventListener('click', () => {
        for(let j = 0; j < value.length; j++){
            console.log(value[j]);
        }
        value = [];
        answer = [];
        i = 0;
        result.textContent = '';
        testResult.textContent = '';
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
}

function multiply(){
    if(value[i] === undefined || value[i-1] === undefined){
        console.log("not yet");
        console.log(value[i] + ' and ' + value[i-1]);
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = value[i-1] * value[i];
        }else {
            answer[j] = answer[j-1] * value[i];
        }
        answer[j] = answer[j].toFixed(3)
        console.log(parseFloat(answer[j]));
        result.textContent = '';
        testResult.textContent = parseFloat(answer[j]);
        j++;
    }
}

function add() {
    if(value[i] === undefined || value[i-1] === undefined){
        console.log("not yet");
        console.log(value[i] + ' and ' + value[i-1]);
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) + parseFloat(value[i]);
        }else {
            answer[j] = parseFloat(answer[j-1]) + parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)

        console.log(answer[j]);
        result.textContent = '';
        testResult.textContent = parseFloat(answer[j]);
        j++;
    }
}

function subtract() {
    if(value[i] === undefined || value[i-1] === undefined){
        console.log("not yet");
        console.log(value[i] + ' and ' + value[i-1]);
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) - parseFloat(value[i]);
        }else {
            answer[j] = parseFloat(answer[j-1]) - parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)
        console.log(answer[j]);
        result.textContent = '';
        testResult.textContent = parseFloat(answer[j]);
        j++;
    }
}

function divide(){
    if(value[i] === undefined || value[i-1] === undefined){
        console.log("not yet");
        console.log(value[i] + ' and ' + value[i-1]);
        return;
    }else{
        if(answer[j-1] === undefined){ 
            answer[j] = parseFloat(value[i-1]) / parseFloat(value[i]);
            
        }else {
            answer[j] = parseFloat(answer[j-1]) / parseFloat(value[i]);
        }
        answer[j] = answer[j].toFixed(3)
        console.log(answer[j]);
        result.textContent = '';
        testResult.textContent = parseFloat(answer[j]);
        j++;
    }
}