function verifyPassword(e) {
    let password = document.querySelector("#password");
    let conf = document.querySelector("#confirm-password");
    if(password.value != conf.value)  
    {
        e.preventDefault();
        password.style.borderColor = "red";
        const errorText = document.createElement("span");
        const column = document.querySelector("#column1")
        errorText.textContent = "* Passwords do not match";
        errorText.style.cssText = "font-size: 0.7rem; color: red;";
        column.appendChild(errorText);
        conf.style.borderColor = "red"; 
    }  
}

const button = document.querySelector("#submit");
button.addEventListener("click", verifyPassword);

