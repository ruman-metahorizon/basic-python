// document.addEventListener('DOMContentLoaded', () => {
//     const registrationform = document.getElementById('registrationForm');
//     const submitForm = document.getElementById('submitForm');

//     registrationform.addEventListener('input', () => {
//         const inputs = registrationform.querySelectorAll('input[required]');
//         let allInputsFilled = true;

//         inputs.forEach(input => {
//             if (!input.value.trim()){
//                 allInputsFilled=false;
//             }
//         });

//         if (allInputsFilled) {
//             submitForm.removeAttribute("disabled");
//         } else {
//             submitForm.setAttribute("disabled", "true");
//         }
//     });

//     // Add an event listener to the form submission
//     registrationForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting for demonstration purposes
        
//         // You can perform your form submission logic here
        
//         // For demonstration, just log a message
//         console.log('Form submitted successfully!');
//     });

// });