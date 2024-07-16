const createAccount = document.getElementById("createAccount");
const accountDetails = document.forms.signupform;

createAccount?.addEventListener("click", async (e) => {
    e.preventDefault();

    const info = new FormData(accountDetails);
    const jstring = JSON.stringify(Object.fromEntries(info));
    console.log(jstring)
    try{
        const response = await fetch('/create-account', {
            method: 'POST',
            body: jstring,
            headers:{
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        if(response.status == 200){
            location.reload();
        }else{
            alert("ERRROR: Failed to create account...");
            console.log("ERROR: Failed to create account in signup.js");
        }
    }catch (err){
        console.log(err);
    }
    

})