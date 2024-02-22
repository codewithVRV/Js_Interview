const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")



fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

empties.forEach((item) => {
    item.addEventListener("dragover", dragOver)
    item.addEventListener("drop", dragDrop)
})


function dragStart () {
    console.log("start")
}
function dragEnd () {
    this.className = "fill"
    console.log("end")
}

function dragOver(e) {
    console.log("dragover")
    e.preventDefault()
}

function dragDrop() {
    console.log(this)
    this.append(fill)
}