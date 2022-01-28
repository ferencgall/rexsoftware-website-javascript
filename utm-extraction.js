var url_string = window.location.href;
var url = new URL(url_string);

var active_utm_medium = url.searchParams.get("utm_medium");
document.getElementById("Active-UTM-Medium").value = active_utm_medium;

var active_utm_campaign = url.searchParams.get("utm_campaign");
document.getElementById("Active-UTM-Campaign").value = active_utm_campaign;

var active_utm_campaign = url.searchParams.get("utm_content");
document.getElementById("Active-UTM-content").value = active_utm_content;

var active_utm_source = url.searchParams.get("utm_source");
document.getElementById("Active-UTM-Source").value = active_utm_source;




