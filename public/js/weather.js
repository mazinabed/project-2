var cities = [];
        function renderButtons() {
            var buttons = cities.map(function (yonge) {
                return `<button class="city">${yonge}</button>`
            });
            $("#buttons-view").html(buttons);
            
        }

        function getWeather() {
            var city = $(this).text();
            if (city) {

                $.ajax({
                    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=Imperial" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
                    type: "GET",
                    dataType: "jsonp",
                    success: function (data) {
                       console.log("Weather data", data)
                        var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
                        
                    }
                });
            }
        };
        

        

        $(document).on("click", ".city", getWeather);
        $("#submitCity").on("click", function (event) {
             localStorage.setItem ("item-" + $("#city-input"), $('#city-input').val());
        
            event.preventDefault();
            cities.push($('#city-input').val());
            $('#city-input').val("");
            renderButtons();
            
        });
        $("#buttons-view").each(function () {
            $(this).val(localStorage.getItem("item-" + $(this).attr("#city-input")));
          });
        renderButtons();
        function showResults(data){
    return  '<h4 style="font-weight:bold; font-size:18px; padding-top:10px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h4>'+
            "<h4 style='padding-left:10px;'>Date: "+result+"</h4>"+
            "<h4 style='padding-left:10px;'>Weather: "+data.weather[0].main+"</h4>"+
            "<h4 style='padding-left:10px;'>Description:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h4>"+
            "<h4 style='padding-left:10px;'>Temperature: "+data.main.temp+" &deg;F</h4>"+
            "<h4 style='padding-left:10px;'>Humidity: "+data.main.humidity+"%</h4>"+
            "<h4 style='padding-left:10px;'>Min Temperature: "+data.main.temp_min+"&deg;F</h4>"+
            "<h4 style='padding-left:10px;'>Max Temperature: "+data.main.temp_max+"&deg;F</h4>"+
            "<h4 style='padding-left:10px;'>Wind Speed: "+data.wind.speed+"m/s</h4>";
            
}
var date = new Date();
  var format = 'LLLL';
  var result = moment(date).format(format);



