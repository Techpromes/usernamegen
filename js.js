const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const generateBtn = document.getElementById('generate-btn');
const usernameOutput = document.getElementById('username');

generateBtn.addEventListener('click', generateUsername);

function generateUsername() {
    const firstName = firstNameInput.value.trim().toLowerCase();
    const lastName = lastNameInput.value.trim().toLowerCase();

    if (firstName && lastName) {
        const username = ${firstName}.${lastName}${getRandomNumber()};
        usernameOutput.textContent = username;
    } else {
        usernameOutput.textContent = 'Please enter your first and last name.';
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
}