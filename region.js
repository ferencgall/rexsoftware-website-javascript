function show_popup(){$("#region-selector-container").css("display","flex"),$("#cookie-banner-bottom").css("display","none")}function hide_popup(){$("#region-selector-container").css("display","none"),$("#cookie-banner-bottom").css("display","block")}null===localStorage.getItem("Region")&&show_popup(),$("#au-button").click(function(){localStorage.setItem("Region","AU"),hide_popup(),document.getElementById("region-text").innerHTML="Australia"}),$("#nz-button").click(function(){localStorage.setItem("Region","NZ"),hide_popup(),document.getElementById("region-text").innerHTML="New Zealand"}),$("#uk-button").click(function(){localStorage.setItem("Region","UK"),hide_popup(),document.getElementById("region-text").innerHTML="United Kingdom",location.reload()}),$("#global-button").click(function(){localStorage.setItem("Region","Global"),hide_popup(),document.getElementById("region-text").innerHTML="Global",location.reload()}),$("#au-button-mobile").click(function(){localStorage.setItem("Region","AU"),hide_popup()}),$("#nz-button-mobile").click(function(){localStorage.setItem("Region","NZ"),hide_popup()}),$("#uk-button-mobile").click(function(){localStorage.setItem("Region","UK"),hide_popup(),location.reload()});var region=localStorage.getItem("Region");"AU"===region&&(document.getElementById("region-text").innerHTML="Australia"),"UK"===region&&(document.getElementById("region-text").innerHTML="United Kingdom"),"NZ"===region&&(document.getElementById("region-text").innerHTML="New Zealand"),"Global"===region&&(document.getElementById("region-text").innerHTML="Global"),$("#region-button").click(function(){show_popup()});
