// const { sendPasswordResetEmail } = require("@firebase/auth");

// import {sendPasswordResetEmail} from "@firebase/auth"


let SignUp = document.getElementById("MainForm-Signup");
let SignIn = document.getElementById("MainForm-Signin");
let Forgot = document.getElementById("MainForm-ForgotPassword");

let EmailInp = document.getElementById("email");
let PassInp = document.getElementById("password");
let FnameInp = document.getElementById("fname");
let LnameInp = document.getElementById("lname");
let Phone = document.getElementById("phone");

let ForgotPass = document.getElementById("frogetPassword");
////////////////////////////////////////////////////////////////////
/////////////////////////// SIGN UP ////////////////////////////////
////////////////////////////////////////////////////////////////////

let RegisterUser = async (evt) => {
    
let EmailInp = document.getElementById("email");
let PassInp = document.getElementById("password");
let FnameInp = document.getElementById("fname");
let LnameInp = document.getElementById("lname");
let Phone = document.getElementById("phone");

    await firebase.auth().createUserWithEmailAndPassword(EmailInp.value, PassInp.value)
        .then(async (credentials) => {
            console.log(credentials);

            // Reference to the Firestore collection
            var collectionRef = firebase.firestore().collection("UseAuthList");

            // Reference to the Firestore document with auto-generated ID
            var documentRef = await collectionRef.doc(credentials.user.uid).set({
                firstname: FnameInp.value,
                lastname: LnameInp.value,
                phone: Phone.value,
                email: EmailInp.value,  // Optionally add email to Firestore
                password: PassInp.value
            });

            // console.log("Document written with ID: ", documentRef.id);

            window.location.replace("Signin.html");
        })
        .catch((error) => {
            alert(error);
            console.log(error.code);
            console.log(error.message);
        });
};

function register(){
    
    RegisterUser();
}

////////////////////////////////////////////////////////////////////
/////////////////////////// SIGN IN ////////////////////////////////
////////////////////////////////////////////////////////////////////

let SignInUser = async () => {
    let EmailInp = document.getElementById("email");
    let PassInp = document.getElementById("password");
    
    await firebase.auth().signInWithEmailAndPassword(EmailInp.value, PassInp.value).then(async (credentials)=>{
        console.log(credentials);
        
        // Reference to the Firestore collection
        var collectionRef = firebase.firestore().collection("UseAuthList");
        
        var documentRef = collectionRef.doc(credentials.user.uid);
        
        await documentRef.get().then( (docSnap)=>{
            if (docSnap.exists) {
                localStorage.setItem("user-info", JSON.stringify({
                    firstname: docSnap.data().firstname,
                    lastname: docSnap.data().lastname,
                }));
                
                localStorage.setItem("user-creds", JSON.stringify(credentials.user));
                window.location.replace("Dashboard.html");
            } else {
                alert("User data not found in Firestore");
            }
        });
    })
    .catch((error)=>{
        alert(error.message);
        console.error(error.code);
    console.error(error.message);
    })

    
};

////////////////////////////////////////////////////////////////////
/////////////////////// FORGOT PASSWORD ////////////////////////////
////////////////////////////////////////////////////////////////////
async function ForgotPassword() {
    let EmailInp = document.getElementById("email");

    console.log(EmailInp);
    await firebase.auth().sendPasswordResetEmail(EmailInp.value)
        .then(() => {
            alert("A password reset link have been sent to your email");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    if (SignUp) {
        console.log("first")
        SignUp.addEventListener('submit', RegisterUser)
    }
    
    
    if(SignIn) {
        console.log("first1")
        SignIn.addEventListener('submit', SignInUser)
    }
    
    if(Forgot){
        Forgot.addEventListener('submit', ForgotPassword)
    }
})







