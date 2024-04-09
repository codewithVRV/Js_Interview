

const box = document.getElementById("box")
const tip = document.getElementById("tip")
const spanEle = document.querySelectorAll(".icon")
const spanText = document.querySelector("span")
let defaultIcon = box.firstElementChild;


spanEle.forEach((item) => {
    item.addEventListener("click", () => {
        const text = item.getAttribute("name")
        console.log(item.getAttribute("name"))
        box.replaceChild(item, defaultIcon)
        box.style.backgroundColor = "brown"
        box.style.color = "white"
        spanText.innerText = text;
        tip.style.display = "none"

    })
})



box.addEventListener("mouseover", () => {
    tip.style.visibility = "visible"
})
box.addEventListener("mouseout", () => {
    tip.style.visibility = "visible"
})