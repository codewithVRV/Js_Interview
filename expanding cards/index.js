
const images = document.querySelectorAll("img")
// console.log(images)
images.forEach((item) => {
    console.log(item)
    item.addEventListener("mouseover", (e) => {
        console.log(e.target)
        let targetedImage = e.target;
        targetedImage.classList.add("newclass")
        console.log(targetedImage)
    })
    item.addEventListener("mouseleave", (e) => {
        let targetedImage = e.target;
        targetedImage.classList.remove("newclass")
        console.log(targetedImage)
    })
})