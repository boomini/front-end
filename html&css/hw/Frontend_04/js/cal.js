$(document).ready(function () {
    var operator = "";
    var result = "";
    var inputnum = "";
    var flag = false;

    var calc = function (input) {
        if (input == "c") {
            $("#answer").empty().append(0);
            result = "";
            console.log("check")
            flag = false;
        } else if (input == "."||input == "0"||input == "1" || input == "2" || input == "3" || input == "4" || input == "5" || input == "6" || input == "7" || input == "8" || input == "9") {
            if (flag) {
                result = "";
            }
            if (input == "0" && result == "") {
                return;
            }
            if (input == "." && result == "") {
                result += "0";
                inputnum += "0";
            }
            console.log(flag);
            result += input;
            inputnum += input;
            console.log(result);
            flag = false;
            $("#answer").empty().append(inputnum);
        } else if (input == "=") {
            inputnum = "";
            flag = true;
            console.log(result);
            $("#answer").empty().append(eval(result));
        } else {
            flag = false;
            result += input;
            inputnum = "";
        }
    }
    $('button').click(function () {
        var input = $(this).val();
        console.log(input);
        calc(input);
        
    })
$(document).keypress(function (event) {
    console.log("check");
    var input;
    if (event.keyCode == "13") input = "=";
    else input = String.fromCharCode(event.keyCode);
   
    calc(input);
})
    
})

