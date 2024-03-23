// Function to generate custom username
function generateCustomUsername(firstName, lastName) {
    // Get the first letter of the first name
    const firstLetter = firstName.charAt(0).toLowerCase();
    // Combine the first letter with the last name
    const username = firstLetter + lastName.toLowerCase();
    return username;
}

// Get the elements
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const generateBtn = document.getElementById('generate-btn');
const usernameDisplay = document.getElementById('username');

// Add event listener to the generate button
generateBtn.addEventListener('click', () => {
    // Get the values of first name and last name
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    
    // Check if both fields are filled
    if(firstName && lastName) {
        // Generate custom username
        const username = generateCustomUsername(firstName, lastName);
        
        // Display the username
        usernameDisplay.textContent = username;
    } else {
        // If any field is empty, show an error
        usernameDisplay.textContent = "Please fill in both first name and last name.";
    }
});
