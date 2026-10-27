const button = document.getElementById("myButton");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
    
    h1.textContent = "Button was clicked!";
});