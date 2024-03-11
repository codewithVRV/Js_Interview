const text = document.getElementById("text")
const name = document.querySelector("span")
name.classList.remove("choice")
const btn = document.getElementById("btn")
const parent = document.getElementById("name")


btn.addEventListener("click", () => {
    let str = text.value;
    const newNameArray = str.split(",")
    console.log(newNameArray)
    for(let i = 0; i < newNameArray.length; i++){
        console.log(newNameArray[i])
    }
    const listOfAll = newNameArray.map((item) => {
        const newName = document.createElement("span")
        newName.textContent = item;
        newName.classList.add("choice")
        parent.append(newName)
    })
    text.value = ""

    function getRandomTag () {
        const selectedTag = newNameArray[(Math.floor(Math.random() * listOfAll.length))];
        const newSpan = document.createElement("span")
        newSpan.textContent = selectedTag;
        return newSpan;
    }
    function addActiveClass (tag) {
        tag.classList.add('active');
        console.log("class added",tag)
    }
    function removeActiveClass (tag){
        tag.classList.remove("active")
        console.log("class removed",tag)

    }
    function showRandomAnimation () {
        let selectedTag = getRandomTag()
        console.log("selected tag is", selectedTag)
        setTimeout(() => {
            addActiveClass(selectedTag);
        }, 10);
    }
    setTimeout(() => {
        removeActiveClass(selectedTag);
    }, 300);
    
    setTimeout(() => {
        animationStart()
        const selectedName = newNameArray[(Math.floor(Math.random() * listOfAll.length))];
        const newSpan = document.createElement("span")
        newSpan.classList.add("select")
        newSpan.textContent = selectedName;
        parent.appendChild(newSpan);
    }, 3000)

    // if (e.key === "Enter"){
        // e.target.value = ""
        // for(let i = 0; i < 30; i++){
        //     setTimeout(() => {
        //         showRandomAnimation()
        //     }, i*200)
        // }
    // }
    function animationStart () {
        console.log("animation start")
        for(let i = 0; i < 30; i++){
            setTimeout(() => {
                showRandomAnimation()
            }, i*800)
        }
    }


})
