const mailer = require('nodemailer')

const send = async() =>{
    const options = {
        from :"shivalipatel.20.ce@iite.indusuni.ac.in", 
        to:"artistically2002@gmail.com",
        subject:"test mail", 
        text:"hello shivali"
    }//what is create test account
    const transporter = mailer.createTransport({
        service : "gmail",
        host : "stmp.gmail.com",
        port :587,
        secure: false,
        auth :{
            user :"shivalipatel.20.ce@iite.indusuni.ac.in",
            pass : "gjopxbfwcqlcuysh"
        }
    })
    let info = await transporter.sendMail(options);
    return info;
}
 module.exports = {send}