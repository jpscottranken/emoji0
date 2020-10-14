"use strict";

$(document).ready(function(event){
	//	Code that runs when save button clicked
    $("#submitButton").click(function() {
		$("span").text("");   // clear any previous error messages
        let isValid = true;   // initialize isValid flag
		
		//	Grab values from textboxes
        let fname	= $("#firstname").val();
        let lname	= $("#lastname").val();
        let email	= $("#email").val();
        let phone	= $("#phone").val();
        let pass 	= $("#password").val();
        let conpass = $("#confirmpassword").val();
		
		//	Validate first name present
		if (fname.trim() === "")
		{
			isValid = false;
            $("#firstname").next().text("X Please enter your first name");
		}
		else {
			$("#firstname").next().text("");
		}
		
		//	Validate last name present
		if (lname.trim() === "")
		{
			isValid = false;
            $("#lastname").next().text("X Please enter your first name");
		}
		else {
			$("#lastname").next().text("");
		}
		        
		//	Validate email present and
		//	formatted correctly
        if ((email === "") || 
            (!email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)))
        {
            isValid = false;
            $("#email").next().text("X Please enter a valid email");
        }
		else {
			$("#email").next().text("");
		}
		
		//	Validate phone number present and
		//	formatted correctly nnn-nnn-nnnn
		let phonepattern = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
		let phoneresult  = phonepattern.test(phone);
		
        if ((phone === "") ||  (!phoneresult))
		{
            isValid = false;
            $("#phone").next().text("X Please enter a valid phone number");
        }
		else {
			$("#phone").next().text("");
		}
		
		//let passwordpattern = /^[A-Za-z0-9]+$/;
		//let passwordresult  = passwordpattern(pass);
		
        if (pass.trim().length < 8)
		{
            isValid = false;
            $("#password").next().text("X Please enter a valid password");
        }
		else if (/\s/.test(pass)) {
    		isValid = false;
            $("#password").next().text("X Please enter a valid password");
		}
		
		else {
    			$("#password").next().text("");
		}
		
		//	Validate confirm password present and
		//	matches password field contents
        if ((conpass.trim() === "") || (conpass !== pass))
		{
            isValid = false;
            $("#confirmpassword").next().text("X Passwords must match");
        }
		else {
			$("#confirmpassword").next().text("");
		}
		
 		//	Give an alert showing all checks passed
        if (!isValid) {
			 return false;
 	    }
		else {
			alert("All checks passed");
			event.preventDefault();
		}
    });
	
	$("#resetButton").click(function()
	{
		clearTheInterface();
	});
	
	function clearTheInterface()
	{
		$("#firstname").val("");
        $("#lastname").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#password").val("");
        $("#confirmpassword").val("");
		$("#firstname").next().text("");
		$("#lastname").next().text("");
		$("#email").next().text("");
		$("#phone").next().text("");
		$("#password").next().text("");
		$("#confirmpassword").next().text("");
		$("#firstname").focus();
	}
});
