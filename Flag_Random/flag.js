
const flagName = document.querySelector("h1")
const flagColumbia = document.querySelector(".flagColumbia")
const flagArgentina = document.querySelector(".flagArgentina")
const flagGermany = document.querySelector(".flagGermany")
const flagFrance = document.querySelector(".flagFrance")

function randomNumber () {
    const number = Math.floor(Math.random()*4)
    return number;

}

document.addEventListener("dblclick", ()=> {
    console.clear()
    const num = randomNumber()
    if(num == 1) {
        flagName.style.display = "block"
        flagName.textContent = "Flag of Columbia"
        flagColumbia.style.display = "block"
        flagArgentina.style.display = "none"
        flagGermany.style.display = "none"
        flagFrance.style.display = "none"
        setTimeout(() => {
        flagName.style.display = "none"

        }, 1500)
    }
    else if (num == 2) {
        flagName.style.display = "block"
        flagName.textContent = "Flag of Argentina"
        flagArgentina.style.display = "block"
        flagColumbia.style.display = "none"
        flagGermany.style.display = "none"
        flagFrance.style.display = "none"
        setTimeout(() => {
            flagName.style.display = "none"
    
        }, 1500)
    }
    else if (num == 3) {
        flagName.style.display = "block"
        flagName.textContent = "Flag of Germany"
        flagGermany.style.display = "block"
        flagArgentina.style.display = "none"
        flagColumbia.style.display = "none"
        flagFrance.style.display = "none"
        setTimeout(() => {
            flagName.style.display = "none"
    
            }, 1500)
        
    }
    else if (num == 0) {
        flagName.style.display = "block"
        flagName.textContent = "Flag of India"
        flagFrance.style.display = "block"
        flagGermany.style.display = "none"
        flagArgentina.style.display = "none"
        flagColumbia.style.display = "none"
        setTimeout(() => {
            flagName.style.display = "none"
    
            }, 1500)
        
    }
    


})