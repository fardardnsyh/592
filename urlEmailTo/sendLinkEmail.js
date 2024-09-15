



// Validating Empty Field
window.check_empty = function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sms = document.getElementById('sms').value;
    const msg = document.getElementById('msg').value;
    const link = "https://github.com/FSU-Devs/SoccerScoreboard";
    const subj = "  Link to Your SoccerScoreboard!";

    if (name == "" || ( email == "" && sms == "") || msg == "") {
    alert("Please enter a name and message and either a phone number or email address or both!");
    } else {
        //sendLink(link, email, msg); 
        //getFormData();
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
        
    //location.href = './inProgress.html';
    //console.log(name);
    }
    
    }


    //Function To Display Popup
    window.div_show = function() {
    document.getElementById('emailAddr').style.display = "block";
    }
    //Function to Hide Popup
    window.div_hide = function(){
    document.getElementById('emailAddr').style.display = "none";
    }

    function getFormData() {
        let stuff = Array.from(document.querySelectorAll('#form input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
        let sentName = stuff['name'];
        let sentEmail = stuff['email'];
        let sentPhone = stuff['sms'];
        let sentMessage = stuff['msg'];
        //console.log(stuff);
        console.log(sentName, ' ', sentEmail, ' ', sentPhone, ' ', sentMessage);
       
    }
    

   
    
   

    

    

    