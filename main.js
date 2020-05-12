"use strict"


function whoConnected(){
    for (let i = 0; i<localStorage.length; i++){
        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        if(account.status=="true") return account;                   
    }
    return null;
}
