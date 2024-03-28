

const percentage = document.querySelector("span")
const prog_bar = document.getElementById("progress-bar")

let num = Number(5);
percentage.textContent = num + "%"
prog_bar.style.flexBasis = num

const id = setInterval(() => {
    num += 5
    percentage.textContent = num + "%"
    prog_bar.style.flexBasis = num + "%"
    if(num >= 100){
        clearInterval(id)
        num = 100
    }
}, 300)




