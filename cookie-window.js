if (localStorage.getItem('Cookies') === null){
    $("#cookie-window").show();
  }
 
$( "#cookie-accept" ).click(function() {
  $("#cookie-window").hide();
  localStorage.setItem('Cookies','Accepted');
});
