//javaScript file to demonstrate the various JS operators and switch ..case
//construct to create a simple calculator

// create a funtion to handle the calculation
/* 
function calculate() {

    //constants to hold the numbers/values entered by the user and the operation selected
    const num1 = parseInt(document.getElementById('txtFirstNum').value);
    const num2 = parseInt(document.getElementById('txtSecondNum').value);
    const operation = document.getElementById('sLtOperation').value;
}

//variable to store the result

switch(operation){

    case "+":
        result = num1 + num2;
        break;
        case "-":
            result = num1 - num2;
            break;
            case "*";
            result = num1 * num2;
            break;
            case "/"; //for robustness handle the case when num2 == 0 to avoid errors in your script
            result = num1 / num2;
            break;
            case "%";
            result = num1 % num2;
            break;
            case "^";
            result = num1 ** num2; //same as Math.pow(num1,num2)
            break;
            default:
                alert("please select Add ,subtract, Multiply, divide ,Modulus/remainder of exponent/power")
                result = "";
                break;



}
//display the result
document.getElementById('txtAnswer').value = result;
 */
 // 1. Set the Copyright Year automatically
        document.getElementById("currYear").textContent = new Date().getFullYear();

        // 2. The Calculator Logic
        function calculateResult() {
            // Get DOM elements
            const num1Input = document.getElementById('txtFirstNum').value;
            const num2Input = document.getElementById('txtSecondNum').value;
            const operator = document.getElementById('selOperator').value;
            const resultSpan = document.getElementById('txtResult');

            // Validation: Ensure fields are not empty
            if (num1Input === '' || num2Input === '' || operator === '') {
                resultSpan.textContent = "Please fill in all fields.";
                resultSpan.style.color = "red";
                return;
            }

            // Convert string inputs to Numbers
            const num1 = parseFloat(num1Input);
            const num2 = parseFloat(num2Input);
            let result = 0;

            // Decision Construct: Switch-Case
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultSpan.textContent = "Cannot divide by Zero";
                        resultSpan.style.color = "red";
                        return; // Stop execution
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultSpan.textContent = "Invalid Operation";
                    return;
            }

            // Display the final result
            resultSpan.style.color = "black";
            resultSpan.textContent = result;
        }