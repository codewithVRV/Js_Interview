document.addEventListener("click", (e) => {
    
    const box = document.getElementById("box")

    box.style.top = (e.clientY - box.offsetHeight/2) + "px";
    box.style.left = (e.clientX - box.offsetWidth/2) + "px";

})

// Note:- Explore the difference between e.x and e.y with respect to e.clientX and e.clientY;