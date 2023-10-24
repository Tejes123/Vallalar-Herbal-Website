function addData()
    {   
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var uemail = document.getElementById("email").value.trim();
        var upass = document.getElementById("password").value; 
        var emaflag =0;
        var passflag = 0;
        var specialchar = "!@#$%^&*~`-_+=/?><,";
        var passflagtemp = 0;
        var emailvalue = localStorage.getItem(uemail);
        for (i=0; i < specialchar.length; i++) {
            if (upass.includes(specialchar[i])) {
                passflagtemp = 1;
                break;
            }
        }
        if (uemail && uemail.includes('@') && (uemail.match(/@\D+.com/) || uemail.match(/@\D+.in/) || uemail.match(/@\D+.net/) )) {
            emaflag = 1;
        }
        if (upass.length > 8 && passflagtemp && upass.match(/\d/)) {
            passflag = 1;
        }
        if (emailvalue == undefined) {
        if (fname && lname && uemail && upass)  {
        if (emaflag && passflag) {
            let object = { "firstname":fname, "lastname":lname, "useremail":uemail, "userpwd":upass };
            localStorage.setItem(uemail, JSON.stringify(object));
            alert("Sign In Successful! " + fname +" " + lname);
            firstn = JSON.parse(localStorage.getItem(uemail)).firstname;
            lastn = JSON.parse(localStorage.getItem(uemail)).lastname;
        }
        else if (emaflag == 0 && passflag == 1 ) {
            alert("Your Email is invalid. \nPlease check if your email includes '@' sign and proper extension.");
        }
        else if(emaflag == 1 && passflag == 0) {
            alert("Your Password is invalid.\n It does not meet up the security requirements mentioned.")
        }
        else {
            alert("Both your email and password are invalid. \nPlease recheck.")
        }
    }
        else {
            alert("Some Fields are Empty.");
        }
    }
    else {
        alert("This email already exists. Please try a new email.");
    }
    }

function checkData()
    {
        var givenpass = document.getElementById("password").value;
        var givenemail = document.getElementById("email").value;
        if (givenpass && givenemail) {
            var obj = localStorage.getItem(givenemail);
            if (obj == undefined) 
            {
                alert("Invalid Details! Try again or Sign In to create a new account.");
                window.location.href = "login.html";
            }
            else{
                var existpass = JSON.parse(obj).userpwd;
                if(existpass == givenpass) {
                    var fullname = JSON.parse(obj).firstname + " " + JSON.parse(obj).lastname;
                    alert("Hurray! You have Log In Successfully!\nWelcome! " + fullname );
                    firstn = JSON.parse(localStorage.getItem(uemail)).firstname;
                    lastn = JSON.parse(localStorage.getItem(uemail)).lastname;
                }    
                else {
                    alert("Password is Incorrect");
                    window.location.href = "login.html";
                }
                }
        }
        else {
            alert("Some Fields are Empty");
        }
    }
    





    



         
