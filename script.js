/*const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

document.querySelector('body').appendChild(h2); */

const welcome = document.getElementById("welcome-message");

welcome.addEventListener("mouseover", function() {
    welcome.style.backgroundColor = "indigo";
})

welcome.addEventListener("mouseout", function() {
    welcome.style.backgroundColor = "black";
})
