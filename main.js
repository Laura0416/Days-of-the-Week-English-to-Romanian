
function translate_word(){
    var day = document.getElementById("dayEnglish").value;
    console.log(day);
    day = day.toLowerCase();

    if(day == "monday"){
        console.log("hello2")
        document.getElementById("romanianVersion").innerHTML = "Luni";
    }
    else if(day == "tuesday"){
        console.log("hello1");
        document.getElementById("romanianVersion").innerHTML = "Marti";
    }
    else if(day == "wednesday"){
        document.getElementById("romanianVersion").innerHTML = "Miercuri";
    }
    else if(day == "thursday"){
        document.getElementById("romanianVersion").innerHTML = "Joi";
    }
    else if(day == "friday"){
        document.getElementById("romanianVersion").innerHTML = "Vineri";
    }
    else if(day == "saturday"){
        document.getElementById("romanianVersion").innerHTML = "Sambata";
    }
    else if(day == "sunday"){
        document.getElementById("romanianVersion").innerHTML = "Duminica";
    }
    else{
        document.getElementById("romanianVersion").innerHTML = "error";
    }
}