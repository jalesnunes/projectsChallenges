//const numCollection = []

function insertData(num) {
    document.getElementById("visor").innerHTML += num
}

/*function calculation(symbol) {
    var oldNum = document.getElementById("visor").innerHTML
    numCollection.push(Number(oldNum))

    document.getElementById("accumulator").innerHTML += ` ${document.getElementById("visor").innerHTML} ${symbol}`

    console.log(numCollection)

    document.getElementById("visor").innerHTML = ""
    numCollection.push(symbol)
}*/

function showResult() {
    document.getElementById("accumulator").innerHTML = `${document.getElementById("visor").innerHTML} ${"="} `
    var result = eval(document.getElementById("visor").innerHTML)

    document.getElementById("visor").innerHTML = result

    document.getElementById("accumulator").innerHTML += result
}

function cleanAll() {
    document.getElementById("visor").innerHTML = ""
    document.getElementById("accumulator").innerHTML = ""
    /*while (numCollection.length) {
        numCollection.pop()
    }

    console.log(numCollection)*/
}

function cleanThis() {
    document.getElementById("visor").innerHTML = ""
}