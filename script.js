const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let number = 0;

work(); 

function work(){
    buttons.forEach(button => {
        button.addEventListener("click", () =>{
            result.textContent = button.textContent;
        })
    })
    
}
