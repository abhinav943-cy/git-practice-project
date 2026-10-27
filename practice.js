const button = document.getElementById("myButton");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
    
    h1.textContent = "Button was clicked!";
    h1.style.color = "blue";
    h1.style.fontSize = "30px";
});

let name = "Abhinav";
console.log("Hello " + name);
console.log("I am learning Git branches");