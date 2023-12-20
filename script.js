// Get the input element with the ID 'inputBox'
let input = document.getElementById('inputBox');

// Get all the button elements on the page
let buttons = document.querySelectorAll('button');

// Initialize a string variable to store the input expression
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Loop through each button and attach a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button has inner HTML equal to '='
        if (e.target.innerHTML == '=') {
            // Evaluate the expression in the string using eval() and update the input value
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button has inner HTML equal to 'AC' (All Clear)
        else if (e.target.innerHTML == 'AC') {
            // Clear the string and update the input value
            string = "";
            input.value = string;
        }
        // Check if the clicked button has inner HTML equal to 'Del' (Delete)
        else if (e.target.innerHTML == 'Del') {
            // Remove the last character from the string and update the input value
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // If none of the above conditions are met, append the button's inner HTML to the string
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
