function show_popup() {
    $("#region-selector-container").css("display", "flex");
}

function hide_popup() {
    $("#region-selector-container").css("display", "none");
}

function setRegion(o) {
    localStorage.setItem("Region", o);
    hide_popup();
    location.reload();
}

function regionImage(o) {
    var src = "";
    if ("Australia" === o) {
        src = "https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c004808669433a2a4ccbc1_au-icon.svg";
    } else if ("United Kingdom" === o) {
        src = "https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c01f1191144da3266079d2_uk-icon.svg";
    } else if ("New Zealand" === o) {
        src = "https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/61c01ec77ea68a0adc30ae17_nz-icon.svg";
    } else if ("Global" === o) {
        src = "https://uploads-ssl.webflow.com/6188a89516ba2d3c21c2dcd0/6215daf20289022fd3c4db7c_globe.png";
    }
    document.getElementById("region-flag").src = src;
    document.getElementById("nav-region").src = src; // Update nav-region image
}

function regionDisplay() {
    var o = localStorage.getItem("Region");
    document.getElementById("region-text").innerHTML = o;
    regionImage(o);
}

if (null === localStorage.getItem("Region")) {
    show_popup();
} else {
    hide_popup();
    regionDisplay();
}

$("#au-button,#au-button-mobile").click(function() {
    region = "Australia";
    setRegion(region);
});

$("#nz-button,#nz-button-mobile").click(function() {
    region = "New Zealand";
    setRegion(region);
});

$("#uk-button,#uk-button-mobile").click(function() {
    region = "United Kingdom";
    setRegion(region);
});

$("#global-button,#global-button-mobile").click(function() {
    region = "Global";
    setRegion(region);
});

$("#region-button").click(function() {
    show_popup();
});
