$(document).ready(function(){
	
	//var av = new AccountValidator();
	var sc = new SignupController();
	
	//$('#company-form').ajaxForm({
	//	beforeSubmit : function(formData, jqForm, options){
	//		return av.validateForm();
	//	},
	//	success	: function(responseText, status, xhr, $form){
	//		if (status == 'success') $('.modal-alert').modal('show');
	//	},
	//	error : function(e){
	//		if (e.responseText == 'email-taken'){
	//			av.showInvalidEmail();
	//		}	else if (e.responseText == 'username-taken'){
	//			av.showInvalidUserName();
	//		}
	//	}
	//});
	//$('#name-tf').focus();
	
// customize the company signup form //
	
	$('#company-form h2').text('Create Company');
	$('#company-form #sub').text('Please tell us a little about company');
	$('#company-form-btn1').html('Cancel');
	$('#company-form-btn2').html('Submit');
	$('#company-form-btn2').addClass('btn-primary');
	
// setup the alert that displays when an company is successfully created //

	$('.modal-alert').modal({ show:false, keyboard : false, backdrop : 'static' });
	$('.modal-alert .modal-header h4').text('Company Created!');
	$('.modal-alert .modal-body p').html('Your Company has been created.</br>Click OK to return to the Settings page.');

});
