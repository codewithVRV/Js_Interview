const key = document.getElementById("key")
const code = document.getElementById("code")
const btn = document.getElementById("btn")


window.addEventListener("keyup", (e) => {
    if(e.key === " ") {
        key.innerHTML = `You pressed <b>Space</b>`
    }
    else{
        key.innerHTML = `You pressed <b>${e.key}</b>`
    }
    // key.innerHTML = `You pressed <b>${e.key}</b>`
    code.innerHTML = `KeyCode is <b>${e.code}</b>`
    console.log(e.key)
})

btn.addEventListener("click", (e) => {
    alert("buttn clicket")
})