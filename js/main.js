// (49°C × 9/5) + 32 = 120.2°F
// (32°F − 32) × 5/9 = 0°C



var user = document.getElementById("input1")
var celsius = document.getElementById("input2")
var fahrenhelt = document.getElementById("input3")
var submit = document.getElementById("submit")
var para = document.getElementById("para")



submit.onclick = function () {
  var convert = Number(user.value)
  
  var gender = document.getElementsByName("Temperature")
    for(i=0 ; i<gender.length;i++){
        if (gender[i].checked)
        var one =  gender[i].value
    }
    if(one == "one"){
      convert = (convert * 9/5) + 32 
      para.textContent ="Fahrenhelt : "+  convert.toFixed(1) + "°F"
    }
    else if(one == "two"){
      convert = (convert -32) * 5/9 
      para.textContent ="Celsius : " + convert.toFixed(1) + "°C"
    }
    else{
      para.textContent ="Select the conversion"
    }
}
