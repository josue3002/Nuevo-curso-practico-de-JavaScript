const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const Parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log (input.value);

console.log ({
    h1,
    p,
    Parrafito,
    pid,
    input,
});

h1.innerHTML = "Perro <br> Feo";
h1.innerText = "Perro <br> Feo";
// console.log (h1.getAttribute ("class"));
// h1.setAttribute ("class" , "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");
//h1.classList.toggle("verde");
//h1.classList.contains("verde");

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "./272960975_3276700182567593_5123290390815090558_n.jpg");
console.log(img);

pid.innerHTML = "";
pid.append(img);