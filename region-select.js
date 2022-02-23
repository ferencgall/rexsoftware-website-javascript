    if (localStorage.getItem("Region") === null) {
        show_popup();
    }

    function show_popup() {
        $("#region-selector-container").css("display", "flex");
        $("#cookie-banner-bottom").css("display", "none");
    }

    function hide_popup() {
        $("#region-selector-container").css("display", "none");
        $("#cookie-banner-bottom").css("display", "block");
    }

    $("#au-button").click(function() {
        localStorage.setItem("Region", "AU");
        hide_popup();
        document.getElementById("region-text").innerHTML = "Australia";
    });

    $("#nz-button").click(function() {
        localStorage.setItem("Region", "NZ");
        hide_popup();
        document.getElementById("region-text").innerHTML = "New Zealand";
    });

    $("#uk-button").click(function() {
        localStorage.setItem("Region", "UK");
        hide_popup();
        document.getElementById("region-text").innerHTML = "United Kingdom";
        location.reload();
    });

    $("#global-button").click(function() {
        localStorage.setItem("Region", "Global");
        hide_popup();
        document.getElementById("region-text").innerHTML = "Global";
        location.reload();
    });

    $("#au-button-mobile").click(function() {
        localStorage.setItem("Region", "AU");
        hide_popup();
    });

    $("#nz-button-mobile").click(function() {
        localStorage.setItem("Region", "NZ");
        hide_popup();
    });

    $("#uk-button-mobile").click(function() {
        localStorage.setItem("Region", "UK");
        hide_popup();
        location.reload();
    });

    var region = localStorage.getItem("Region");
    if (region === "AU") {
     document.getElementById("region-text").innerHTML = "Australia"
    }
    if (region === "UK") {
     document.getElementById("region-text").innerHTML = "United Kingdom"
    }
    if (region === "NZ") {
     document.getElementById("region-text").innerHTML = "New Zealand"
    }
    if (region === "Global") {
     document.getElementById("region-text").innerHTML = "Global"
    }
    $("#region-button").click(function() {
            show_popup();
        });
