var weatherModel = Backbone.Model.extend();
var weatherCollection = Backbone.Collection.extend({
  model: weatherModel,
  url: '/weathers'
});

var wc = new weatherCollection
var cityName = 'Austin'

var app = {
  init: function() {
    $('form').on('submit', function(e){
      e.preventDefault();
      var cityName = $('#weather_city').val();
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +",us&mode=json&units=imperial"
      $.get(url, function(data) {
        // $(need to name a id).html( data )
        var temp = data.main.temp
        var pdata = {weather: {temp: temp, city: cityName}}
        wc.add({city: cityName, temp: temp})
      });
    });
  }
}

$(document).ready(app.init)
