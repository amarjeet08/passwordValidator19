const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const noIdea = document.getElementById("noIdea")


submit.addEventListener( "click", (e) => {
    e.preventDefault()
    const userInput = email.value;
    const userPassword = password.value;
    if(userInput.includes("@") && userPassword.length > 8 ) {
        noIdea.style.color = "green";
        noIdea.style.fontWeight = "900"
     noIdea.innerText = "Valid email and password"
    }else{
        noIdea.style.color = "red";
        noIdea.style.fontWeight = "900"
    noIdea.innerText = "Invalid email and password"}
    })