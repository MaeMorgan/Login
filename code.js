//creates a function to check input length
function Username(inputtxt, minlength, maxlength)
{ 
    var field = inputtxt.value; 
    var mnlen = minlength;
    var mxlen = maxlength;
    //controls input length
    if(field.length<mnlen || field.length> mxlen)
    { 
        //lets user know if user inputted is not within length requirements
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").innerHTML = "Invalid credentials. Please make sure everything was inputed correctly.";
        return false;
    }
    else
    { 
        //lets user know if user inputted mets requirements
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").innerHTML = "Your credentials have been accepted.";
        //writes user input onto page
        document.getElementById("name").innerHTML = field;
        return true;
    }
}

function badgeNumber(inputtxt, minlength, maxlength){
    
    var field = inputtxt.value; 
    var mnlen = minlength;
    var mxlen = maxlength;

    if(field.length<mnlen || field.length> mxlen)
    { 
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").innerHTML = "Invalid credentials. Please make sure everything was inputed correctly.";
        return false;
    }
    else
    { 
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").innerHTML = "Your credentials have been accepted.";
    }
}