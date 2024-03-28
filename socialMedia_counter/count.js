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
    countNumber1 += 100;
    count1.textContent = countNumber1;
    countNumber2 += 60;
    count2.textContent = countNumber2;
    countNumber3 += 40;
    count3.textContent = countNumber3;
    
}, 100)





setTimeout(() => {
    clearInterval(id1)
}, 5000)




