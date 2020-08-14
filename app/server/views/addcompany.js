//extends layout//

//block content//

        //include company//
//	include modals/alert//

//block scripts//
	//script(src='/js/views/addcompany.js')//
	//script(src='/js/controllers/addcompanyController.js')//
	//script(src='/js/form-validators/accountValidator.js')//

extends layout

block content

	include account
	include modals/alert

block scripts
	script(src='/js/views/signup.js')
	script(src='/js/controllers/signupController.js')
	script(src='/js/form-validators/accountValidator.js')
