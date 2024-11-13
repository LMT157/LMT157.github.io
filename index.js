const correctPasswordHash = "4ed46f765efb5890a9750c98dac44df338d65aead065199c04a2d550c8d66f8b";

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(); 
}

function authenticate() {
    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const loginContainer = document.getElementById("login-container");
    const topBar = document.getElementById("top-bar");
    const protectedContent = document.getElementById("protected-content");

    if (hashPassword(passwordInput) === correctPasswordHash) {
        errorMessage.style.display = "none";
        loginContainer.style.display = "none";
        topBar.style.display = "flex"; // Show the top navigation bar
        protectedContent.style.display = "block"; // Show the main content
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
}

// Add Enter key functionality for the password input
document.getElementById("password-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        authenticate();
    }
});
