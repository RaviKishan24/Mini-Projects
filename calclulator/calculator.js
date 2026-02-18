let display = document.getElementById('inputBox');
let allButtons = document.querySelectorAll('button');

let currentInput = "";
let previousInput = "";
let operator = null;
let expression = "";

console.log("current input is",currentInput)
console.log("previous input is",previousInput)
console.log("expression is",expression)
function calculate() {
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    if (isNaN(num1) || isNaN(num2)) return;

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = null;
    expression = currentInput; // reset expression to result
}

allButtons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        // Handle numbers
        if (button.classList.contains("number")) {
            if (value === "•") value = ".";

            currentInput += value;
            expression += value;
            display.value = expression;
        }

        // Handle operators
        if (button.classList.contains("operator")) {

            if (value === "AC") {
                currentInput = "";
                previousInput = "";
                operator = null;
                expression = "";
                display.value = "";
                return;
            }

            if (value === "Del") {
                currentInput = currentInput.slice(0, -1);
                expression = expression.slice(0, -1);
                display.value = expression;
                return;
            }

            if (value === "=") {
                calculate();
                display.value = currentInput;
                return;
            }

            // Prevent operator without number
            if (currentInput === "") return;

            // If already have previous number, calculate first (cascade)
            if (previousInput !== "") {
                calculate();
            }

            operator = value;
            previousInput = currentInput;
            currentInput = "";
            expression += value;

            display.value = expression;
        }
    });
});


























//  let string ="";
//    console.log("string is ",string)

// allButtons.forEach(btn=>{
//     btn.addEventListener('click',()=>{
   
// const  clicked= btn.innerText;

  
//            if(clicked=='AC'){
//                display.value=""
//                string=""

//         } else if(clicked==='Del'){
//            console.log("del is clickd")
//            display.value=string.substring(0,string.length-1)
        

//         } else if(clicked=='='){
//          let result= eval(string);
//          console.log("result is ",result)
//          display.value=result

//         }
  
//         else {
//             console.log("string is ",string)
//              string=string+clicked
//        display.value+=clicked
      
     
   
//         }
        
    

//     })


// })






