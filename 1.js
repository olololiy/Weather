$(document).ready(function(){
    $.get (
        "api.openweathermap.org/data/2.5/weather",
        {
            "id" : "569143",
            "appid": "d9431e6682f4694660a9e3ca704911b9"

        },
        function(data) {
            console.log(data);
        }
    )
});