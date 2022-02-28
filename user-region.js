//Display the popup when called upon
function show_popup() {
    $("#region-selector-container").css("display", "flex");
}

//Hide the popup when called upon
function hide_popup() {
    $("#region-selector-container").css("display", "none");
}

//Set the region to selected region when called upon
function setRegion(region) {
	localStorage.setItem("Region", region);
	hide_popup();
	location.reload();
	}

//Check if region is already set. If not, call upon the display popup function
if (localStorage.getItem("Region") === null) {
	show_popup();
}
//Otherwise, hide popup & display region as they have already selected it
else {
	hide_popup();
	regionDisplay();
}

//Listen for button click relevant to each region and execute the function to then save this region

//Australia Selection
$("#au-button").click(function() {
    region = "Australia"
    setRegion(region);
});
//New Zealand Selection
$("#nz-button").click(function() {
    region = "New Zealand"
    setRegion(region);
});
//United Kingdom Selection
$("#uk-button").click(function() {
    region = "United Kingdom"
    setRegion(region);
});
//Global Selection
$("#global-button").click(function() {
    region = "Global"
    setRegion(region);
});

//Display status of region depending on selected region when called upon

//Display region icon
function regionImage(region) {
	if (region === "Australia") {
		document.getElementById('region-flag').src=
		"https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c004808669433a2a4ccbc1_au-icon.svg";
	}
	else if (region === "United Kingdom") {
		document.getElementById('region-flag').src=
		"https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c01f1191144da3266079d2_uk-icon.svg";
	}
	else if (region === "New Zealand") {
		document.getElementById('region-flag').src=
		"https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c01ec77ea68a0adc30ae17_nz-icon.svg";
	}
	else if (region === "Global") {
		document.getElementById('region-flag').src=
		"https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/6215daf20289022fd3c4db7c_globe.png";
	}
}

//Display the region name in footer
function regionDisplay() {
	var regionSelected = localStorage.getItem("Region");
	document.getElementById("region-text").innerHTML = regionSelected;
	regionImage(regionSelected);
}

//Allow user to change region on button click
$("#region-button").click(function() {
    show_popup();
});
