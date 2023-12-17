

const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
var name_valid=false;
var email_valid=false;
var desc_valid=false;
function alpha()
{
    var nom = document.getElementById('name').value.trim();
    var error_name=document.getElementById('error_name').value;
    if(nom==="")
	{
        document.getElementById("name").innerHTML="field is requiered";
        error_name="this filed is required"
    }
    else {
        if(!/^[a-zA-Z]+$/.test(nom)){
            document.getElementById("name").innerHTML="name must contain only alphabets";
            error_name="Name must contain only alphabets"
        }
        else {
            name_valid=true
        }
    }
}
function emailVal()
{
    var email = document.getElementById('email').value.trim();
    var error_email=document.getElementById('error_email').value;
    if(email==='')
	{
        document.getElementById("email").innerHTML="field is required";
        error_email='field is required'
    }
    else {
        if(!email.match(emailRegex))
		{
            document.getElementById("name").innerHTML="you must follow this pattern of email xy@za.bc";
            error_email='you must follow this pattern of email xy@za.bc'
        }
        else {
            email_valid=true;
        }
    }
}
function descFiled() 
{
    var desc = document.getElementById('desc').value.trim();
    var desc_error=document.getElementById('error_desc').value;

    if (desc == '') 
	{
        document.getElementById("name").innerHTML="field is required";
        desc_error="field is required"
    }
    else{
        desc_valid=true
        console.log(desc_valid);
    }
}
function save()
{
    if(name_valid && desc_valid && email_valid){
        alert('sent')
    }
    else {
        alert('error')
    }

}

document.getElementById("name").addEventListener("keyup" , function()
 {
	 
 }); 
 
 document.code.addEventListener('submit',function(e){
	e.preventDefault();
	save();
}); 