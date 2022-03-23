if (localStorage.getItem('Cookies' !== 'Accepted') {
    $("#cookie-window").show();
    }

$( "#cookie-accept" ).click(function() {
  $("#cookie-window").hide();
  localStorage.setItem('Cookies','Accepted');
});
