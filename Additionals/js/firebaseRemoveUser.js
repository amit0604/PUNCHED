
// DISPLAY USER AND SIGN OUT
let UserCreds = JSON.parse(localStorage.getItem("user-creds"));
let UserInfo = JSON.parse(localStorage.getItem("user-info"));

let UserName = document.getElementById('user-name');
let SignoutBtn = document.getElementById('signoutbutton');

let Signout = ()=>{
    firebase.auth().signOut().then(() => {
        localStorage.removeItem("user-creds");
        localStorage.removeItem("user-info");
        window.location.replace("Signin.html"); 
    }).catch((err) => {
        console.error(err)
    }) 
}

let CheckCred = ()=>{
    if(!localStorage.getItem("user-creds"))
        window.location.replace("Signin.html");
    else{
        UserName.innerText = `${UserInfo.firstname + " " + UserInfo.lastname}`;
    }
}

window.addEventListener("load",CheckCred);
SignoutBtn.addEventListener('click', Signout);