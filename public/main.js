function  getPhotos(photosData) {
    $("#photos").empty();
    for(var i in photosData) {
        var photo = photosData[i];
        var elem = $("<img>");
        elem.attr("src", photo.filename);
        $("#photos").append(elem);
    }
}

function getPhotosAjax() {
    $.get("/photos", getPhotos);
}

function getUser(userData) {
    if (userData.length == 0) {
        $("#login").show();
    } else {
        $("#logout").show();
        $("#upload").show();
        $("#username").text(userData.name);
        getPhotosAjax();
        setInterval(getPhotosAjax, 300);
    }
}

$.get("/user", getUser);