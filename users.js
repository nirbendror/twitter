"use strict"



function addUser(){
	clearPage();
    for(let i = 0; i<localStorage.length; i++){
		let user1= JSON.parse(window.localStorage.getItem(localStorage.key(i)));
		var para = document.createElement("P");
		para.innerHTML= "<div class='try1'>"+("<div><img id='userImgs' src='assets/user.png' width='90px' height='90px'>")+"<br>"+
		user1.display+"<br>"+("<button class='followB'> Follow</button></div></div>");	
		document.getElementById("updateTweet").appendChild(para);
	}
}

function searchUser(){
	clearPage();
    for(let i = 0; i<localStorage.length; i++){
		let user2= JSON.parse(window.localStorage.getItem(localStorage.key(i)));
		if(user2.display.includes(document.getElementById("searchA").value)){
			var para = document.createElement("P");
			para.innerHTML=  "<div class='try1'>"+("<div><img id='userImgs' src='assets/user.png' width='90px' height='90px'>")+"<br>"+
			user2.display+"<br>"+("<button class='followB'> Follow</button></div></div>");	
			document.getElementById("updateTweet").appendChild(para);
		}
	}
}

function clearPage(){
	var div = document.getElementById("updateTweet"); 			  
	while(div.firstChild) { 
		div.removeChild(div.firstChild); 
	} 
}

function whoConnected(){
    for (let i = 0; i<localStorage.length; i++){
        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        if(account.status=="true") return account;                   
    }
    return null;
}

