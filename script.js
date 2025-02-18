// Load saved counter value or set to 0
let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

// Function to update counter display and save to localStorage
function updateCounter() {
    document.getElementById("counter").innerText = count;
    localStorage.setItem("counter", count);
}

// Increment Function
function increment() {
    count++;
    updateCounter();
}

// Decrement Function
function decrement() {
    count--;
    updateCounter();
}

// Reset Function
function reset() {
    count = 0;
    updateCounter();
}

// Initialize Counter on Page Load
updateCounter();
