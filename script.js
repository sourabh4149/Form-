const form = document.getElementById("form")

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const passwordInput = document.getElementById("password")

const togglePassword = document.getElementById("togglePassword")
const strengthBar = document.getElementById("strengthBar")

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[0-9]{10}$/

// NAME VALIDATION
nameInput.addEventListener("input",()=>{
if(nameInput.value.length < 3){
document.getElementById("nameError").innerText="Name must be at least 3 characters"
}else{
document.getElementById("nameError").innerText=""
}
})

// EMAIL VALIDATION
emailInput.addEventListener("input",()=>{
if(!emailRegex.test(emailInput.value)){
document.getElementById("emailError").innerText="Invalid email"
}else{
document.getElementById("emailError").innerText=""
}
})

// PHONE VALIDATION
phoneInput.addEventListener("input",()=>{
if(!phoneRegex.test(phoneInput.value)){
document.getElementById("phoneError").innerText="Phone must be 10 digits"
}else{
document.getElementById("phoneError").innerText=""
}
})

// PASSWORD STRENGTH
passwordInput.addEventListener("input",()=>{
let pass = passwordInput.value
let strength = 0

if(pass.length >= 6) strength++
if(/[A-Z]/.test(pass)) strength++
if(/[0-9]/.test(pass)) strength++
if(/[^A-Za-z0-9]/.test(pass)) strength++

let width = strength*25
strengthBar.style.width = width + "%"

if(strength <=1) strengthBar.style.background="red"
else if(strength ==2) strengthBar.style.background="orange"
else if(strength ==3) strengthBar.style.background="yellow"
else strengthBar.style.background="green"
})

// SHOW / HIDE PASSWORD
togglePassword.addEventListener("click",()=>{
if(passwordInput.type==="password"){
passwordInput.type="text"
togglePassword.innerText="Hide"
}else{
passwordInput.type="password"
togglePassword.innerText="Show"
}
})

// FORM SUBMIT
form.addEventListener("submit",(e)=>{
e.preventDefault()

let user = {
name:nameInput.value,
email:emailInput.value,
phone:phoneInput.value
}

let submissions = JSON.parse(localStorage.getItem("submissions")) || []

submissions.push(user)

localStorage.setItem("submissions",JSON.stringify(submissions))

alert("Registration Saved!")

form.reset()
strengthBar.style.width="0%"
})