const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'testcoding@yahoo.com',
        pass: 'thisisapassword'
    }
});

let mailDetails = {
    from: 'testcoding@yahoo.com',
    to: 'razn.bran@yahoo.com', 
    subject: 'Testing',
    text: 'Welcome to our application!'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error sending email');
    } else {
        console.log('Email has been sent');
    }
});

// ****************************************************
// !TEST TEST TEST TEST BELOW TEST TEST TEST TEST TEST!
// ****************************************************

// const nodemailer = require('nodemailer');

