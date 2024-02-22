const result = document.getElementById("result")
const select = document.getElementById("select")
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")

let selectedOptionValue;
select.addEventListener("change", () => {
    let selectedOption = select.options[select.selectedIndex]
    selectedOptionValue = selectedOption.value
});

function addCommas(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function addINRCommas(value) {
    return value.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}

btn.addEventListener("click", () => {
    let value = inp.value;
    if(selectedOptionValue == "₹"){
        result.innerHTML = (selectedOptionValue) + addINRCommas(value)+".00";
    }
    else{
        result.innerHTML = (selectedOptionValue) + addCommas(value)+".00";
    }
    inp.value = ""
})




