

let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function(){
    //console.log("button clicked!")
    sectionOne()
    sectionTwo()
    sectionThree()
    
    
})

let section1El = document.getElementById("section1")

function sectionOne(){
    let inputField = document.getElementById("input-field").value;
    let meterToFeet = (inputField * 3.281).toFixed(3);
    let feetToMeter = (inputField/3.281).toFixed(3);
    section1El.innerHTML = `${inputField} meters = ${meterToFeet} feet | 
    ${inputField} feet = ${feetToMeter} meters`
}
let section2El = document.getElementById("section2")
function sectionTwo(){
    let inputField = document.getElementById("input-field").value;
    let litersToGallons = (inputField * 0.264).toFixed(3);
    let gallonsToLiters = (inputField / 0.264).toFixed(3);
    section2El.innerHTML = `${inputField} liters = ${litersToGallons} gallons | 
    ${inputField} gallons = ${gallonsToLiters} liters`
}
let section3El = document.getElementById("section3")
function sectionThree(){
    let inputField = document.getElementById("input-field").value;
    let kiloToPound = (inputField * 2.204).toFixed(3);
    let  poundToKilo = (inputField/2.204).toFixed(3);
    section3El.innerHTML = `${inputField} kilos = ${kiloToPound} pounds | 
    ${inputField} pounds = ${poundToKilo} kilos`
}
