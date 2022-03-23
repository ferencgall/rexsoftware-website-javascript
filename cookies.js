if (localStorage.getItem('Cookies' !== 'Accepted') {
    $("#cookie-window").show();
    }

$( "#cookie-accept" ).click(function() {
  localStorage.setItem('Cookies','Accepted');
});
