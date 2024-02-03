
const Toggle = document.getElementById("ball")
// console.log("toggle div is", Toggle)
const Box = document.getElementById("box")
let heading = document.querySelector("h1")

Toggle.addEventListener("click", (e) => {
    const targetedBtn = e.target;
    targetedBtn.classList.toggle("ball")
    const body = e.target.parentElement.parentElement;
    if(body.getAttribute("class") === "" || body.getAttribute("class") === "light") {
        body.classList.remove("light")
        body.classList.add("dark")
        heading.classList.add("title")
        heading.textContent = "Turn on Light Mode"
        Toggle.style.backgroundColor = "white"
        Box.style.border = "1px solid white"
    }
    else{
        heading.classList.remove("title")
        body.classList.remove("dark")
        body.classList.add("light")
        heading.textContent = "Turn on Dark Mode"
        Toggle.style.backgroundColor = "black"
        Box.style.border = "1px solid black"


    }

})
Box.addEventListener("click", (e) => {
    const targetedBtn = e.target.nextElementSibling;
    targetedBtn.classList.toggle("ball")
    const body = targetedBtn.parentElement.parentElement;
    if(body.getAttribute("class") === "" || body.getAttribute("class") === "light") {
        body.classList.remove("light")
        body.classList.add("dark")
        heading.classList.add("title")
        heading.textContent = "Turn on Light Mode"
        Toggle.style.backgroundColor = "white"
        Box.style.border = "1px solid white"
    }
    else{
        heading.classList.remove("title")
        body.classList.remove("dark")
        body.classList.add("light")
        heading.textContent = "Turn on Dark Mode"
        Toggle.style.backgroundColor = "black"
        Box.style.border = "1px solid black"


    }
})