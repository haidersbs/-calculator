$(function(){
$("form[name='registration']").validate({
	// Specify validation rules its important
rules:{
	// The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname:"required",
      lastname:"required",
      username:{
      	required:true,
      	minlength:2
      },
      number:{
      	required:true,
      	minlength:11
      },
      email:{
      	required:true,
      	 // Specify that email should be validated
        // by the built-in "email" rule
        email:true
      },
      password:{
      	required:true,
      	minlength:8
      },
      confirmpassword:{
      	required:true,
      	minlength:8,
      	equalTo:"#password"
      },
},
messages:{
	firstname:"please enter your firstname",
	lastname:"please enter your lastname",
	username:{
		required:"please enter a username",
		minlength:"your username must consist of at least 2 character"
	},
	number:{
		required:"please provide a number",
		minlength:"your number must be at least 11 characters long"
	},
	password:{
		required:"please provide a password",
		minlength:"Your password must be at least 8 characters long"
	},
	confirmpassword:{
		required:"please provide a password",
		minlength:"Your password must be at least 8 characters long",
		equalTo:"please enter the same password avobe"
	},
	email:"Please enter a valid email address"
},
submitHanlder: function(form){
	form.submit();
}


});

});