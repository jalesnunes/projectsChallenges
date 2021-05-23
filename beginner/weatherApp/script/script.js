function execute() {
    var storeData = []

    var cityName = document.getElementById("city-name").value
    var apiKey = "ae95ce2a887b9fc978ecbfa9c7f181cf"
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric" + "&appid=" + apiKey
    document.getElementById("city").innerHTML = `City Name: ${cityName}`
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)
            var nameValue = Math.round(data["name"])
            var temp = Math.round(data['main']['temp'])
            var description = data['weather'][0]['description']
            var icon = data['weather'][0]['icon']

            document.getElementById("temp").innerHTML = 'Current temp: ' + temp
            document.getElementById("description").innerHTML = 'Description: ' + description
            document.getElementById("icon").src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
         })
         .catch(err => alert('Wrong city name'))
}