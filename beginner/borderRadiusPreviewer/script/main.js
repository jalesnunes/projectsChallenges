function changeTopLeft() {
    console.log("top-left")
    var tf = document.getElementById("top-left").value
    document.getElementById("main-div").style.borderTopLeftRadius  = tf + "px"
    console.log(tf)
}

function changeTopRight() {
    var tr = document.getElementById("top-right").value
    document.getElementById("main-div").style.borderTopRightRadius  = tr + "px"
}

function changeBottomLeft() {
    var bf = document.getElementById("bottom-left").value
    document.getElementById("main-div").style.borderBottomLeftRadius  = bf + "px"
}

function changeBottomRight() {
    var br = document.getElementById("bottom-right").value
    document.getElementById("main-div").style.borderBottomRightRadius  = br + "px"
}