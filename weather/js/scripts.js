// On Click, Get Geolocation, Call Weather Function
$('.geo button').click(function () {
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
});
// Get geolocated weather
var getWeather = function (location) {
    $.simpleWeather({
        location: location
        , unit: 'f'
        , success: function (weather) {
            // Display Data
            $('.geo .in').text('In the city of');
            $('.geo .city').text(weather.city + ', ' + weather.region);
            $('.geo .it').text('It is currently');
            $('.geo .temp').text(weather.temp + '\u00B0' + 'F');
            $('.geo .and').text('and');
            $('.geo .currently').text(weather.currently);
            $('.geo .high1').text("Today's high is");
            $('.geo .high2').text(weather.high + '\u00B0' + 'F');
            $('.geo .low1').text('And the low is');
            $('.geo .low2').text(weather.low + '\u00B0' + 'F');
            $('.geo .wind1').text('The wind is currently');
            $('.geo .wind2').text(weather.wind.speed + " MPH \u2191 " + weather.wind.direction);
            $('.geo .humid1').text('And the humidity is at');
            $('.geo .humid2').text(weather.humidity + "%");
            $('.geo .sun1').text('Today, the sun sets at');
            $('.geo .sun2').text(weather.sunset);
            $('.geo .bye').text('Have a nice day!');
            $('.geo .updated').text(weather.updated);
            $('.geo button').text('Update');
            //change background color
            if (weather.temp < 20) {
                $('body').addClass('one');
            }
            if (weather.temp >= 20 && weather.temp < 40) {
                $('body').addClass('two');
            }
            if (weather.temp >= 40 && weather.temp < 60) {
                $('body').addClass('three');
            }
            if (weather.temp >= 60 && weather.temp < 80) {
                $('body').addClass('four');
            }
            if (weather.temp >= 80 && weather.temp < 100) {
                $('body').addClass('five');
            }
            if (weather.temp >= 100) {
                $('body').addClass('six');
            }
            // Entire weather object
            console.log(weather);
        }
        , error: function (error) {
            // Show if weather cannot be retreived
            $('.geo .error').text('Oh no! Weather is unavailable...');
        }
    });
};