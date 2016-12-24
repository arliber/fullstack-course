function weather() {

  var location = document.getElementById("location");
  var apiKey = 'f536d4c3330c0a1391370d1443cee848'; // PLEASE SIGN UP FOR YOUR OWN API KEY
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° C');
      $('#hourly').html(data.hourly.summary);
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();

/*
  Assignemnt

  Show an icon at the top of the page (fontawesome?) OR change the whole background of the page based on the current weather.
  E.g. if the current weather is "Raining" - display an icon or background of rain on the page.

*/
