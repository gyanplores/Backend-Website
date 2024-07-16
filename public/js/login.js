const createAccount = document.getElementById("loginAccount");
const loginDetails = document.forms.loginform;

createAccount?.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const info = new FormData(loginDetails);
    const jstring = JSON.stringify(Object.fromEntries(info));
    console.log(jstring)
    try{
        const response = await fetch('/login-verify', {
            method: 'POST',
            body: jstring,
            headers:{
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        if(response.status === 200){
            console.log("SUCCESS: Login Successful!");
            //location.reload();
        }else{
            alert("Failed to Login!");
            console.log("ERROR: Failed to login account in login.js");
        }
    }catch (err){
        console.log(err);
    }
})