let count1 = document.getElementById("count1")
let count2 = document.getElementById("count2")
let count3 = document.getElementById("count3")

count1.innerHTML = 7443;
let a = count1.innerHTML;
let countNumber1 = Number(a)

count2.innerHTML = 5301;
let b = count2.innerHTML;
let countNumber2 = Number(b)


count3.innerHTML = 1232;
let c = count3.innerHTML;
let countNumber3 = Number(c)



const id1 = setInterval(() => {
    countNumber1 += 50;
    count1.textContent = countNumber1;
    
}, 100)

const id2 = setInterval(() => {
    countNumber2 += 80;
    count2.textContent = countNumber2;
    
}, 100)


const id3 = setInterval(() => {
    countNumber3 += 120;
    count3.textContent = countNumber3;
    
}, 100)




setTimeout(() => {
    clearInterval(id1)
    clearInterval(id2)
    clearInterval(id3)
}, 5000)

