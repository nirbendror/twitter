	"use strict"

	function Validation(){
		let user=JSON.parse(window.localStorage.getItem(document.getElementById("username").value));
		if(user==null){
				alert("the username not exist");
				return ;
			}
		if(user.pass!=password.value){
			alert("the password not match");
			return ;
		}
			
		login1(user);
		window.localStorage.setItem(user.user,JSON.stringify(user));
		form.action="Tweets.html";
   
	}
	
	
	function loginlogout(){
		let account;
		let who_connect = whoConnected();
		if (who_connect==null){
			var para = document.createElement("P");
			para.innerHTML= "login";		
			document.getElementById("login").appendChild(para);
		}
		
		else{
			for (let i = 0; i<localStorage.length; i++){
				account=JSON.parse(window.localStorage.getItem(localStorage.key(i)));
				if (account.status=="true")
					break;
			}
			if (account.status=="true"){
				var para= document.createElement("P");
				para.innerHTML= "logout";		
				document.getElementById("login").appendChild(para);
				
			}
			
			else{
				var para = document.createElement("P");
				para.innerHTML= "login";		
				document.getElementById("login").appendChild(para);
			}
		}
			
		document.getElementById('login').onclick= fun1;



	}
	
		
		
	function logoutall(){
		for (let i = 0; i<localStorage.length; i++) 
		{
			let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
			account.status= "false";
			window.localStorage.setItem(account.user,JSON.stringify(account));                  
		}
	}
	

	function login1(user){

		user.status="true";

	
	}
	
	function fun1(){
		logoutall();
		document.getElementById("login").onclick=(location.href="login.html");
	}

	

