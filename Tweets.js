

"use strict"
function writeTweet(){
	let who_connect = whoConnected();
	if(who_connect==null){
		var para = document.createElement("P");
		para.innerHTML = ("<div class='aaaaa'><img src='assets/user.png' width='20px' height='20px'> "+
		"<strong> Anonymous</strong></div>"+document.getElementById("tweeText").value);
		document.getElementById("updateTweet").appendChild(para);
		
	}
	else{
		var para = document.createElement("P");
		para.innerHTML = ("<div class='aaaaa'><img src='assets/user.png' width='20px' height='20px'>"+
		"<strong>"+who_connect.display+"</strong>"+"</div>"+document.getElementById("tweeText").value);
		document.getElementById("updateTweet").appendChild(para);
		document.getElementById('tweeText').value = "";
		
	}
}


