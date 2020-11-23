var taInput, divOutput;
var btnRun;
var InputArray = [];
window.onload = function() {
        console.log("Hooray! Its working");
        taInput = document.getElementById('txtInput');
        divOutput = document.getElementById('divOutput');
        btnRun = document.getElementById('btnRun');

    } //end window.onload

function runFwAlgo() {
    console.log("Running Warshall Algorithm")
    divOutput.innerHTML = "<p>Transitive Closure of the Relation Is:</p>"
    divOutput.innerHTML += InputArray;
    var number = 0;

    //Defining 2D array:
    var for_array = Array();
    //For Temp array
    from_text_input_area = document.getElementById('txtInput').value;
    for (var i = 0; i < from_text_input_area.length; i++) {
        //If Array is Characters:
        if (/\S/.test(from_text_input_area[i])) {

            if (from_text_input_area[i] != ",") {
                for_array[number] = from_text_input_area[i];
                number++;
            }
        }
        //if array value is , / etc.
        if (/^[,]+$/.test(from_text_input_area[i][i])) {

            if (from_text_input_area[i] != ",") {
                for_array[number] = (from_text_input_area[i][i]);
                number++;
            }
        }
    }
    while (for_array.length) {

        InputArray.push(for_array.splice(0, 4));
    }

    FwAlgo();
} //end run

function FwAlgo() {
    //Implement your solution here
    var i = 0;
    var j = 0;
    var k = 0;

    for (var k = 0; k < InputArray.length; k++) {
        for (var i = 0; i < InputArray.length; i++) {
            for (var j = 0; j < InputArray.length; j++) {

                InputArray[i][j] = InputArray[i][j] || (InputArray[i][k] && InputArray[k][j]);

            }
        }
    }
    console.log(InputArray);

    document.getElementById('divOutput').innerHTML += InputArray;

    //Mention reference where you got the solution
    //From OpenGenus IQ
    //Ref: https://iq.opengenus.org/transitive-closure-using-floyd-warshall-algorithm/
    //Ref: If you found any paper
} //end sol1
