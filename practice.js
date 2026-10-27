const button = document.getElementById("myButton");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
    
    h1.textContent = "Button was clicked!";
    h1.style.color = "blue";
    h1.style.fontSize = "30px";
});

let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
    console.log(num);
});