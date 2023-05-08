
function addData()
    {
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var uemail = document.getElementById("email").value;
        var upass = document.getElementById("password").value;   
        if (fname && lname && uemail && upass) {
            let object = { "firstname":fname, "lastname":lname, "useremail":uemail, "userpwd":upass };
            localStorage.setItem(uemail, JSON.stringify(object));
            alert("Sign In Successful! " + fname + lname);
        }
        else {
            alert("Some Fields are Empty.");
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

    



         
