////////////////////////////////////////////////////////////////////////////////////////

var display = document.getElementById("display");
var buttons = document.querySelectorAll("input[type='button']");
var result = document.getElementById("result");
var calculator = function(number) {
    display.value += number;
}
var Display = function() {
    try {
        result.value = eval(display.value)
        display.value = "";
    } catch (msg) {
        alert("Please Enter A Valid Input")
    }
}

document.getElementById("clear").addEventListener('click', function() {
    display.value = "";
    result.value = "";
});

document.getElementById("del").addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
    result.value = "0";
});


/////////////////////////////////////////////////////////////////////////////////////////////////////


//Anouther Way

/*var display = document.getElementById("display");
var result = document.getElementById("result");

function getDisplay() {
    return display.innerText;
}

function printDisplay(num) {
    display.innerText = num;
}

function getResult() {
    return result.innerText;
}

function printResult(num) {
    if (num == "") {
        result.innerText = num
    } else {
        result.innerText = getFormatedNumber(num);
    }
}

function getFormatedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''))
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
            printDisplay("");
            printResult("");
        } else if (this.id == "del") {
            var output = reverseNumberFormat(getResult()).toString();
            if (output) { //if output has a value
                output = output.substr(0, output.length - 1);
                // output=output.slice(0,-1);
                printResult(output);
            }
        } else {
            var resultt = getResult();
            var displayy = getDisplay();
            if (resultt == "" && displayy == "") {
                if (isNaN(displayy[displayy.length - 1])) {
                    displayy = displayy.substr(0, displayy.length - 1)
                }
            }
            if (resultt != "" || displayy != "") {
                resultt = resultt == "" ? resultt : reverseNumberFormat(resultt);
                displayy = displayy + resultt;

                if (this.id == "equal") {
                    var resultt = eval(displayy);
                    printResult(resultt);
                    printDisplay("");
                } else {
                    displayy = displayy + this.id;
                    printDisplay(displayy);
                    printResult("")
                }
            }
        }
    });
    var number = document.getElementsByClassName("number");
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
            var output = reverseNumberFormat(getResult());
            if (output != NaN) { //outbut is a number
                output += this.id;
                printResult(output);

            }
        })
    }
}*/