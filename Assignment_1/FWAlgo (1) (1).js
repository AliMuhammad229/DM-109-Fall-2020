var taInput, divOutput;
var btnRun;


window.onload = function() {
        console.log("Hooray! Its working");
        taInput = document.getElementById('txtInput');
        divOutput = document.getElementById('divOutput');
        btnRun = document.getElementById('btnRun');
    } //end window.onload

function runFwAlgo() {
    console.log("Running Floyd Warshall")
    divOutput.innerHTML = "<p>Transitive Closure of the Relation Is:</p>"
    FwAlgo();
    divOutput.innerHTML += "Add Your Output Here. Remove this!"
        //Get Input from 
} //end run

function FwAlgo() {
    //Implement your solution here
    var temp_taInput = [
        []
    ];
    var two_d_arra = [
        []
    ];
    var two_d_arra = [
        []
    ];
    var result_array = [
        []
    ];

    for (var i = 0; i < taInput.length; i++) {
        for (var j = 0; j < taInput.length; j++) {
            temp_taInput[i][j] = taInput
        }
    }
    for (var i = 0; i < temp_taInput.length; i++) {
        for (var j = 0; j < temp_taInput.length; j++) {
            two_d_arra[i][j] = temp_taInput[i][j]
        }
    }
    for (var i = 0; i < temp_taInput.length; i++) {
        for (var j = 0; j < temp_taInput.length; j++) {
            if (temp_taInput[i][j] == 1) {
                result_array[i][j] = 1
            } else {
                result_array[i][j] = 0
            }
        }
    }
    for (var k = 0; k < temp_taInput.length; k++) {
        for (var i = 0; i < temp_taInput.length; i++) {
            for (var j = 0; j < temp_taInput.length; j++) {
                result_array[i][j] = result_array[i][j] || (result_array[i][k] && result_array[k][j]);
            }
        }
    }

    //From OpenGenus IQ
    //Ref: https://iq.opengenus.org/transitive-closure-using-floyd-warshall-algorithm/
    //Ref: If you found any paper
} //end sol1