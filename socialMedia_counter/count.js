let count1 = document.getElementById("count1")
let count2 = document.getElementById("count2")
let count3 = document.getElementById("count3")

count1.innerHTML = 0;
let a = count1.innerHTML;
let countNumber1 = Number(a)

count2.innerHTML = 0;
let b = count2.innerHTML;
let countNumber2 = Number(b)


count3.innerHTML = 0;
let c = count3.innerHTML;
let countNumber3 = Number(c)



const id1 = setInterval(() => {
    countNumber1 += 2000;
    count1.textContent = countNumber1;
    countNumber2 += 83;
    count2.textContent = countNumber2;
    countNumber3 += 122;
    count3.textContent = countNumber3;
    
}, 100)

// const id2 = setInterval(() => {
    
// }, 100)


// const id3 = setInterval(() => {
    
// }, 100)




setTimeout(() => {
    clearInterval(id1)
    // clearInterval(id2)
    // clearInterval(id3)
}, 5000)

count1.innerHTML = 10000;

