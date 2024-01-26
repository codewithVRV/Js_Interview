const key = document.getElementById("key")
const code = document.getElementById("code")


window.addEventListener("keydown", (e) => {
    key.innerHTML = `You pressed <b>${e.key}</b>`
    code.innerHTML = `KeyCode is <b>${e.code}</b>`
})