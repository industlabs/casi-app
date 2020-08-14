function AddcompanyController()
{
// redirect to settings when cancel button is clicked //
	$('#company-form-btn1').click(function(){ window.location.href = '/settings';});

// redirect to homepage on new company creation, add short delay so user can read alert window //
	$('.modal-alert #ok').click(function(){ setTimeout(function(){window.location.href = '/settings';}, 300)});
}
