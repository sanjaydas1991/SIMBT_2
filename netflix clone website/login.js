const loginForm=document.getElementById("login-form");
const loginButton=document.getElementById("login-button");

loginForm.addEventListener("click"),(e) =>{
    e.preventDefault();
    const emailaddress=loginForm.emailaddress.value;
    const password=loginForm.password.value;

    if(emailaddress==="user" && password === "web_dev") {
        alert("you have successfully logged in.");
        location.reload();
    }else{
        loginForm.style.opacity=1;
    }
}