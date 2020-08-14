extends layout

block content

	include account
	include modals/alert

block scripts
	script(src='/js/views/company.js')
	script(src='/js/controllers/addcompanyController.js')
	script(src='/js/form-validators/accountValidator.js')
