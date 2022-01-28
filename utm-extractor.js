var url_string = window.location.href;
var url = new URL(url_string);

var active_utm_medium = url.searchParams.get("utm_medium");
document.getElementById("active_utm_medium").value = active_utm_medium;
var active_utm_campaign = url.searchParams.get("utm_campaign");
document.getElementById("active_utm_campaign").value = active_utm_campaign;
var active_utm_campaign = url.searchParams.get("utm_campaign");
document.getElementById("active_utm_campaign").value = active_utm_campaign;
var active_utm_content = url.searchParams.get("utm_content");
document.getElementById("active_utm_content").value = active_utm_content;
var active_utm_source = url.searchParams.get("utm_source");
document.getElementById("active_utm_sourcet").value = active_utm_source;




