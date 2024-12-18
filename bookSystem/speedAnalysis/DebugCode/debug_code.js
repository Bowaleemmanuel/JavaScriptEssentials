    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = multiply(num1, num2);
    
                        // Display the result
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                    switch (performOperation) {
                        case '+':
                          return num1 + num2;
                        case '-':
                          return num1 - num2;
                        case '*':
                          return num1 * num2;
                        case '/':
                          return num1 / num2;
                        default:
                          return 'Invalid operation';
                      }
                }
    
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }

                // if (!isNaN(num1) && (!isNaN(num2))) {

                // }
                // function add(a,b) {
                //     return a + b;
                // }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }


                
                  
                //   // Example usage:
                //   console.log(calculate('+', 10, 5)); // Outputs: 15
                //   console.log(calculate('-', 10, 5)); // Outputs: 5
                //   console.log(calculate('*', 10, 5)); // Outputs: 50
                //   console.log(calculate('/', 10, 5)); // Outputs: 2
                  
            