$(document).ready(function(){
	
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
