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
    });

    $("#nz-button").click(function() {
        localStorage.setItem("Region", "NZ");
        hide_popup();
    });

    $("#uk-button").click(function() {
        localStorage.setItem("Region", "UK");
        hide_popup();
        location.reload();
    });

    $("#global-button").click(function() {
        localStorage.setItem("Region", "Global");
        hide_popup();
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
