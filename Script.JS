document.getElementById("res").addEventListener("click",function(){
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var answer = weight / (height * height)
    var ans = "None"
    if(answer < 18)
        ans = "Thinness"
    else if(answer >=18 && answer <= 24.9)
        ans = "Ideal weight"
    else if (answer >= 25 && answer <= 29.9)
        ans = "Overweight"
    else if (answer >= 30 && answer <= 34.9)
        ans = "Obesity, First degree"
    else if (answer >= 35 && answer <= 39.9)
        ans = "Obesity, Second degree"
    else if(answer >= 40)
        ans = "Serious obesity"
    
    if(ans == "None"){
        ans = "Your Didn't Enter Data."
        document.getElementById("res-num").innerHTML = "BMI Number: " + ans
        document.getElementById("res-word").innerHTML = "State BMI: " + ans
    }
    else {
    document.getElementById("res-num").innerHTML = "BMI Number: " + answer.toFixed(2) + " KG/M" + "²"
    document.getElementById("res-word").innerHTML = "State BMI: " + ans
    }
})