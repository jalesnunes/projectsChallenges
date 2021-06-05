

function randomize() {
    var min = parseInt(document.getElementById("min-number").value)
    var max = parseInt(document.getElementById("max-number").value)

    // console.log(min)
    // console.log(max)
    if (isNaN(min)) {
        document.getElementById("min-error").innerHTML = "Please enter a Minimum"
        //alert("Please enter a Minimum")
    } else if(isNaN(max)) {
        alert("Please enter a Maximum")

    } else if (min > max) {
        alert("Maximum must be higher than minimum")
    } else {
        var result = getRandom(min, max)
        document.getElementById("random-number-result").innerHTML = result
    }


    //console.log(result)
}

function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test() {
    document.getElementById("min-error").style.display = "none"
}