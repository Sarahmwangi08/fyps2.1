
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-InCVCUCxGaUywDbBQk_d3pOq-ucE7Gk",
    authDomain: "pms-project-e80e5.firebaseapp.com",
    databaseURL: "https://pms-project-e80e5.firebaseio.com",
    projectId: "pms-project-e80e5",
    storageBucket: "pms-project-e80e5.appspot.com",
    messagingSenderId: "143329747776"
};
firebase.initializeApp(config);

console.log('js check');


$('#signupbtn').click(function () {
    document.getElementById('signupform').hidden = false; // not hidden
    document.getElementById('loginform').hidden = true; // hidden
});


$('#signupbtn2').click(function () {

    let newuseremail = document.getElementById('signupemailtxt').value;
    let newuserpassword = document.getElementById('signuppasswordtxt').value;

    console.log(newuseremail,newuserpassword);


    firebase.auth().createUserWithEmailAndPassword(newuseremail, newuserpassword).then(function (success) {
        console.log(success);

        document.getElementById('signuperrorinfo').hidden = false;
        document.getElementById('signuperrorinfo').innerText = 'Sign up successful!!';
        sendtophp(newuseremail,newuserpassword);
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(error);
        document.getElementById('signuperrorinfo').hidden = false;
        document.getElementById('signuperrorinfo').innerText = errorMessage;
        window.location.href='profile.html';
        // ...
    });
});

$('#loginbtn').click(function () {
   let loginemail = document.getElementById('loginemailtxt').value;
   let loginpassword = document.getElementById('loginpasswordtxt').value;
    console.log(loginemail,loginpassword);


    firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword).then(function (success) {
        console.log(success);
        window.location.href='profile.html';

        document.getElementById('logintexterror').hidden = false;
        document.getElementById('logintexterror').innerText = 'Login Successful! Welcome.';

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);

        document.getElementById('logintexterror').hidden = false;
        document.getElementById('logintexterror').innerText = errorMessage;
        // ...
    });

});


function sendtophp(username,password) {

    $.ajax({
        type:'POST',
        url:'writeDB.php',
        data:{username:username,password:password},
        success:function (success) {
            console.log('success');
            console.log(success);
        }
    });
}
$('#signupform').submit(function(e) {
    e.preventDefault();
    console.log('works')
});

$('#loginform').submit(function(e) {
    e.preventDefault('works too');
});