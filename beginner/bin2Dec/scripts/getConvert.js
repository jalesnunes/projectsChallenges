function getConvet() {
    var binary = document.getElementById("binary").value
    var binaryLength = binary.length
    var binaryPosition = binary[1]

    document.getElementById("result").innerHTML = binaryPosition
}