
var EM = {};
module.exports = EM;

EM.server = require("emailjs/email").server.connect(
{
	host 	    : process.env.NL_EMAIL_HOST || 'smtp.gmail.com',
	user 	    : process.env.NL_EMAIL_USER || 'support@casi.io',
	password    : process.env.NL_EMAIL_PASS || '4887_Alpha',
	ssl		    : true
});

EM.dispatchResetPasswordLink = function(account, callback)
{
	EM.server.send({
		from         : process.env.NL_EMAIL_FROM || 'cloud.casi.io <do-not-reply@gmail.com>',
		to           : account.email,
		subject      : 'Password Reset',
		text         : 'something went wrong... :(',
		attachment   : EM.composeEmail(account)
	}, callback );
}

EM.composeEmail = function(o)
{
	let baseurl = process.env.NL_SITE_URL || 'cloud.casi.io';
	var html = "<html><body>";
		html += "Hi "+o.name+",<br><br>";
		html += "Your username is <b>"+o.user+"</b><br><br>";
		html += "<a href='"+baseurl+'/reset-password?key='+o.passKey+"'>Click here to reset your password</a><br><br>";
		html += "Cheers,<br>";
		html += "<a href='https://braitsch.io'>braitsch</a><br><br>";
		html += "</body></html>";
	return [{data:html, alternative:true}];
}
