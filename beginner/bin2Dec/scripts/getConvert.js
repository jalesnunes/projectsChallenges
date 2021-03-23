function verify() {
    var binary = document.getElementById("binary")
    for (var i = 0; i < binary.length; i++) {
        
        console.log(binary[i])
    }
    /*if (binary != 0 && binary != 1) {
        document.getElementById("error").innerHTML = "Please enter just 0's and 1's"
    }*/
}

function getConvet() {
    var binary = document.getElementById("binary").value
    var binaryLength = binary.length
    var decimalResult = 0

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 0 || binary[i] == 1) {
            decimalResult += binary[i] * Math.pow(2, binary.length - 1 - i)
            document.getElementById("result").innerHTML = decimalResult
            
        } else {
            document.getElementById("error").innerHTML = "Please enter just 0's and 1's"
        }
        
    }

    /*for (var i = 0; i < binary.length; i++) {

        if (binary[i] != 0 && binary[i] != 1) {
            document.getElementById("error").innerHTML = "Please enter just 0's and 1's"
        } else {
            if (binaryLength == 1 && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 2  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 1)) + (binary[1] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 3  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 2)) + (binary[1] * Math.pow(2, 1)) + (binary[2] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 4  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 3)) + (binary[1] * Math.pow(2, 2)) + (binary[2] * Math.pow(2, 1)) + 
                (binary[3] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 5  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 4)) + (binary[1] * Math.pow(2, 3)) + (binary[2] * Math.pow(2, 2)) + 
                (binary[3] * Math.pow(2, 1)) + (binary[4] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 6  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 5)) + (binary[1] * Math.pow(2, 4)) + (binary[2] * Math.pow(2, 3)) + 
                (binary[3] * Math.pow(2, 2)) + (binary[4] * Math.pow(2, 1)) + (binary[5] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 7  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 6)) + (binary[1] * Math.pow(2, 5)) + (binary[2] * Math.pow(2, 4)) + 
                (binary[3] * Math.pow(2, 3)) + (binary[4] * Math.pow(2, 2)) + (binary[6] * Math.pow(2, 1)) + (binary[6] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            else if (binaryLength == 8  && binary[i] == 0 || binary[i] == 1) {
                decimalResult = (binary[0] * Math.pow(2, 7)) + (binary[1] * Math.pow(2, 6)) + (binary[2] * Math.pow(2, 5)) + 
                (binary[3] * Math.pow(2, 4)) + (binary[4] * Math.pow(2, 3)) + (binary[5] * Math.pow(2, 2)) + (binary[6] * Math.pow(2, 1))
                + (binary[7] * Math.pow(2, 0))
                document.getElementById("result").innerHTML = decimalResult
            }
            //document.getElementById("result").innerHTML = decimalResult
        }
        
        console.log(binary[i])
    }

    /*if (binaryLength == 1) {
        decimalResult = (binary[0] * Math.pow(2, 0))
    }
    else if (binaryLength == 2) {
        decimalResult = (binary[0] * Math.pow(2, 1)) + (binary[1] * Math.pow(2, 0))
    }
    else if (binaryLength == 3) {
        decimalResult = (binary[0] * Math.pow(2, 2)) + (binary[1] * Math.pow(2, 1)) + (binary[2] * Math.pow(2, 0))
    }
    else if (binaryLength == 4) {
        decimalResult = (binary[0] * Math.pow(2, 3)) + (binary[1] * Math.pow(2, 2)) + (binary[2] * Math.pow(2, 1)) + 
        (binary[3] * Math.pow(2, 0))
    }
    else if (binaryLength == 5) {
        decimalResult = (binary[0] * Math.pow(2, 4)) + (binary[1] * Math.pow(2, 3)) + (binary[2] * Math.pow(2, 2)) + 
        (binary[3] * Math.pow(2, 1)) + (binary[4] * Math.pow(2, 0))
    }
    else if (binaryLength == 6) {
        decimalResult = (binary[0] * Math.pow(2, 5)) + (binary[1] * Math.pow(2, 4)) + (binary[2] * Math.pow(2, 3)) + 
        (binary[3] * Math.pow(2, 2)) + (binary[4] * Math.pow(2, 1)) + (binary[5] * Math.pow(2, 0))
    }
    else if (binaryLength == 7) {
        decimalResult = (binary[0] * Math.pow(2, 6)) + (binary[1] * Math.pow(2, 5)) + (binary[2] * Math.pow(2, 4)) + 
        (binary[3] * Math.pow(2, 3)) + (binary[4] * Math.pow(2, 2)) + (binary[6] * Math.pow(2, 1)) + (binary[6] * Math.pow(2, 0))
    }
    else if (binaryLength == 8) {
        decimalResult = (binary[0] * Math.pow(2, 7)) + (binary[1] * Math.pow(2, 6)) + (binary[2] * Math.pow(2, 5)) + 
        (binary[3] * Math.pow(2, 4)) + (binary[4] * Math.pow(2, 3)) + (binary[5] * Math.pow(2, 2)) + (binary[6] * Math.pow(2, 1))
        + (binary[7] * Math.pow(2, 0))
    }*/

    //document.getElementById("result").innerHTML = decimalResult
}