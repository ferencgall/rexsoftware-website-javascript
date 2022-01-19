function show_login_popup() {
	$("#login-popup").css("display","flex");
}

function hide_login_popup() {
	$("#login-popup").css("display","none");
}

$( "#rex-crm-login-button" ).click(function() {
  hide_login_popup();
});

$( "#spoke-login-button" ).click(function() {
  hide_login_popup();
});

$( "#close-login-popup-button" ).click(function() {
  hide_login_popup();
});

$( "#mobile-login-button" ).click(function() {
  show_login_popup();
});
