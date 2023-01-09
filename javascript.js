// const button = document.querySelector("#submit");
// button.addEventListener("click", verifyPassword());

function verifyPassword() {
    let password = document.querySelector("#password").value;
    let conf = document.querySelector("#confirm-password").value;
    if(password != conf)  
    {
        alert("Passwords did not match");  
    } else {  
        alert("Password created successfully");  
    }  
}