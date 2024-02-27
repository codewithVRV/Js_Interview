const text = document.getElementById("text")
const name = document.querySelector("span")
name.classList.remove("choice")
const btn = document.getElementById("btn")
const parent = document.getElementById("name")


btn.addEventListener("click", () => {
    let str = text.value;
    const newNameArray = str.split(",")
    const listOfAll = newNameArray.map((item) => {
        const newName = document.createElement("span")
        newName.textContent = item;
        newName.classList.add("choice")
        parent.append(newName)
    })

    setTimeout(() => {
        const selectedName = newNameArray[(Math.floor(Math.random() * listOfAll.length))];
        const newSpan = document.createElement("span")
        newSpan.classList.add("select")
        newSpan.textContent = selectedName;
        parent.appendChild(newSpan);
    }, 3000)


})
