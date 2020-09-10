function validation(){
	var user = document.getElementById('Patient name').value;
	var mob = document.getElementById('Mobile no').value;
	var ema = document.getElementById('Email address').value;
	var sym = document.getElementById('symptoms').value;
	if(user==""){
		document.getElementById('username').innerHTML="**Please fill the Patient name field";
		return false;
	}
	if((user.length<=2)||(user.length>100)){
		document.getElementById('username').innerHTML="**Name must contain characters between 2 and 100";
		return false;
	}
	if(!isNaN(user)){
		document.getElementById('username').innerHTML="**Only characters are allowed";
		return false;
	}
	if(mob==""){
		document.getElementById('mobile').innerHTML="**Please fill the Patient's mobile number";
		return false;
	}
	if(isNaN(mob)){
		document.getElementById('mobile').innerHTML="**Please enter digits only";
		return false;
	}
	if(mob.length!=10){
		document.getElementById('mobile').innerHTML="**Please enter correct mobile nummber";
		return false;
	}
	if(ema==""){
		document.getElementById('email').innerHTML="**Please fill the Patient's email";
		return false;
	}
	if(ema.indexOf('@')<=0){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
	}
	if((ema.charAt(ema.length-4)!='.')&&(ema.charAt(ema.length-3)!='.')){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
	}
	if(sym==""){
		document.getElementById('symptoms').innerHTML="**Please fill the symptoms field";
		return false;
	}
	
}