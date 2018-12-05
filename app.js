function runCalculator() {
    // Initialize calculator values
    var firstVal = 0
    var secondVal = ''
    var operatorVal = ''

    // Select calculator display and calc keys
    const calculator = document.querySelector('.calculator')
    const calcDisplay = calculator.querySelector('.answer_display')
    const keys = calculator.querySelector('.calculator_keys')

    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            // Do something
            const key = e.target
            const action = key.dataset.action

            // If key is a number
            if (!action) {
                // Change first val or second val depending on where
                // we are in the equation
                // Could just append key.textContent, but this avoids
                // awkward numbers like "00123"
                if (operatorVal == '') {
                    firstVal = (firstVal * 10) + parseInt(key.textContent)
                } else {
                    secondVal = (secondVal * 10) + parseInt(key.textContent)
                }
            // If key is an operator/action
            } else {
                switch (action) {
                    case "add":
                        operatorVal = "+"
                        break
                    case "subtract":
                        operatorVal = "-"
                        break
                    case "multiply":
                        operatorVal = "*"
                        break
                    case "divide":
                        operatorVal = "/"
                        break
                    case "remainder":
                        operatorVal = "%"
                        break
                    case "calculate":
                        firstVal = calculate(firstVal, operatorVal, secondVal)
                        operatorVal = ''
                        secondVal = ''
                        break
                    case "clear":
                        firstVal = 0
                        operatorVal = ''
                        secondVal = ''
                        break
                    default:
                        console.log("Error")
                }
            }
            calcDisplay.textContent = firstVal + operatorVal + secondVal
        }
    })
}

function calculate(n1, op, n2) {
    if (!op || !n2) {
        return "Error"
    }
    return eval(n1 + " " + op + " " + n2)
}

runCalculator()
