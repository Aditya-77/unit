let num = document.getElementById("number")
let v =prompt("Enter Number")
let q=document.getElementById("number")
q.innerText=v
let firstconvnum = document.getElementById("mtofel")
firstconvnum.innerText = num.innerText
document.getElementById("mtof").innerText = (num.innerText * 3.28).toFixed(2) + " Feet"
document.getElementById("ftomel").innerText = num.innerText
document.getElementById("ftom").innerText = (num.innerText / 3.28).toFixed(2) + " Meter"
document.getElementById("ltogel").innerText = num.innerText
document.getElementById("gtolel").innerText = num.innerText
document.getElementById("ktopel").innerText = num.innerText
document.getElementById("ptokel").innerText = num.innerText

document.getElementById("ltog").innerText = (num.innerText / 3.78).toFixed(2) + " Gallon"

document.getElementById("gtol").innerText = (num.innerText * 3.78).toFixed(2) + " Liter"

document.getElementById("ktop").innerText = (num.innerText * 2.20).toFixed(2) + " Pounds"

document.getElementById("ptok").innerText = (num.innerText / 2.20).toFixed(2) + " Kilograms"
