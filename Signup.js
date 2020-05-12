
"use strict"

function newUser(){
	logoutall();
    if(password.value!=confirmPassword.value){
        alert("password not matches!");
        return;
    }
		
    const user={
        user : Username.value,
        display : Displayname.value,
        pass : password.value,
        status : "true"
    }

    window.localStorage.setItem(user.user,JSON.stringify(user));
    form.action="Tweets.html";
}

