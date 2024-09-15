 
 
 
const nodemailer = require('nodemailer');
//const { Script } = require('vm');
 //async..await is not allowed in global scope, must use a wrapper

 const subj = "  Link to Your SoccerScoreboard!";
 const msg = "The link to your SoccerScoreboard is:"
 const name = 'Dave';
 const link = 'https://github.com/FSU-Devs/SoccerScoreboard';
 const address = "rudedude69@msn.com";

 

       /* function textMsg(msg) {
            document.getElementById("msg").innerHTML = msg;
        }*/

 async function sendLink(linked, addr, message) {
    
    /*const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sms = document.getElementById('sms').value;
    const msg = document.getElementById('msg').value;
    const link = "https://github.com/FSU-Devs/SoccerScoreboard"; */

 
        
    //Creating the transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: "dhmason15@gmail.com", //my email
            clientId: "xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com", //oauth client id
            clientSecret: "xxxxxxx-xxxxxxx-xxxxxxxxxxxxx", //secret
            refreshToken: "1//04-s_xxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxx", //refresh token
            accessToken: "yaxx.xxxxxxxxxxxx-xxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // access token
        },
       debug: true, //show debug output
        logger: true // log info in console
    });

    //Send an email
    let info = await transporter.sendMail( {
        from: 'dhmason15@gmail.com',
        to: addr,
        subject: subj,
        //text: link,
        html: `<body> ${message} </body> <br> <a href= ${linked}> SoccerScoreboard</a>`,
    })
    //textMsg(msg);

    console.log("Message sent: %s", info.messageId);

}

sendLink(link, address, msg);
