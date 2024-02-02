const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    const body = e.target.parentElement.parentElement;
    if(e.target.parentElement.parentElement.getAttribute("class") === ""){
        body.classList.add("dark")
        btn.innerHTML = "Light Mode"
        btn.style.color = "white"
    }
    else if (e.target.parentElement.parentElement.getAttribute("class") === "light") {
        body.classList.remove("light")
        body.classList.add("dark")
        btn.innerHTML = "Light Mode"
        btn.style.color = "white"
        
    }
    else if (e.target.parentElement.parentElement.getAttribute("class") === "dark") {
        body.classList.remove("dark")
        body.classList.add("light")
        btn.innerHTML = "Dark Mode"
        btn.style.color = "black"
        btn.style.backgroundColor = "red"
    }

})
