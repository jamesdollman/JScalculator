const buttons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const operatorButton = document.querySelectorAll('.operator');
let output = '';
let input = [];
let i = 0;
let answer = 0;
let operator;
let initChoice = '';
let operatorArray = [''];
initialize();


function initialize(){
    result.textContent = output;
    buttons.forEach(button => {
    button.addEventListener("click", () => {
        output += button.textContent;
        input[i] = (input[i] || '') + button.textContent;
        result.textContent = output;
    });
});

    operatorButton.forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            operatorCheck();
            operator = operatorButton.textContent;
            output += operator;
            console.log("Pressed " + operatorButton.textContent);
            initChoice = operatorButton.textContent;
            i++;
        })
    })

    deleteButton.addEventListener('click', () => {
        console.log("Delete!");
        output = '';
        i--;
        input = [];
        result.textContent = '';
    })

    
}

function operatorCheck() {
    console.log("INITIAL CHOICE IS: "+initChoice);
    if(input[1] === undefined){
        console.log("You dont have two numbers yet");
    }else {
        console.log("You have now stored two numbers, being: " + 
        input[0] + " and " + input[1]);
        if(initChoice === '*'){
            multiply();
            resetting();
        }else if(initChoice === '+'){
            add();
            resetting();
        }else if(initChoice === '-'){
            subtract();
            resetting();
        }else if(initChoice === '/'){
            divide();
            resetting();
        }
    }
    
}

function resetting() {
    result.textContent = '';
    input = [];
    i = -1;
    output = '';
}

function multiply(){
    console.log("Multiply!");
    answer = input[0] * input[1];
    console.log(answer);
}

function add() {
    console.log("Add!");
}

function subtract() {
    console.log("Subtract!");
}

function divide(){
    console.log("Divide!");
}