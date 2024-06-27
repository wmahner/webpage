document.addEventListener('DOMContentLoaded', function() {
    // Canvas Drawing
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FF0000';
        ctx.fillRect(50, 50, 100, 100);

        ctx.fillStyle = '#00FF00';
        ctx.fillRect(150, 100, 100, 100);

        ctx.fillStyle = '#0000FF';
        ctx.fillRect(250, 50, 100, 100);
    }

    // Geolocation
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.getElementById('geolocationStatus').innerHTML = 'Your current location: <br>Latitude: ' + latitude + '<br>Longitude: ' + longitude;
        }, function(error) {
            document.getElementById('geolocationStatus').innerHTML = 'Error getting your location: ' + error.message;
        });
    } else {
        document.getElementById('geolocationStatus').innerHTML = 'Geolocation is not supported by your browser';
    }
});
