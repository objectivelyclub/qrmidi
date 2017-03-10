$(document).ready(function () {
    var currentIndex = 0;
    var imageArray = ["images/2.gif", "images/3.gif", "images/4.gif"];

    var previous = function () {
        $("#main-display-image").hide();
        if (currentIndex == 0) {
            currentIndex = imageArray.length - 1;
        } else {
            currentIndex--;
        }
        $("#main-display-caption").text(imageArray[currentIndex]);
    };

    var next = function () {
        $("#main-display-image").hide();
        if (currentIndex == imageArray.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        $("#main-display-caption").text(imageArray[currentIndex]);
    };

    var play = function () {
        $("#main-display-image").attr("src", imageArray[currentIndex]);
        $("#main-display-image").show();
    };

    $("#prev-button").bind("click", previous);
    $("#next-button").bind("click", next);
    $("#play-button").bind("click", play);

    var checkKey = function (e) {
        switch (e.which) {
            case 189: previous(); break; // dash
            case 187: next(); break; // equals
            case 48: play(); break; // 0
        }
    }

    $("body").on("keydown", checkKey); // make sure this works on firefox

});