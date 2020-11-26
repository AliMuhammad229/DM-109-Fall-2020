var taInput, divOutput, divOutputfortime;
var btnRun;
const generate_random_matrix = [];
const generate_random_matrix_copy_without_commas = [];
var from_input_N_value;
window.onload = function() {
        console.log("Hooray! Its working");
        taInput = document.getElementById('txtInput');
        divOutput = document.getElementById('divOutput');
        btnRun = document.getElementById('btnRun');

    } //end window.onload

function runFwAlgo() {
    console.log("Running Warshall")
    divOutput.innerHTML = "<p>Transitive Closure of the Relation Is:</p>"


    //divOutput.innerHTML+="Add your output here. Remove this!"
    divOutput.innerHTML += generate_random_matrix_copy_without_commas;

    //Generate 100 by 100 Matrix:
    for (var i = 0; i < 100; i++) {
        generate_random_matrix[i] = []
        for (var j = 0; j < 100; j++) {
            generate_random_matrix[i][j] = Math.round(Math.random());
        }
    }
    console.log(generate_random_matrix)

    var array = Array();
    var x = 0;
    from_input_N_value = document.getElementById('txtInput').value;
    for (var i = 0; i < generate_random_matrix.length; i++) {

        if (/\S/.test(generate_random_matrix[i])) {

            if (generate_random_matrix[i] != ",") {
                array[x] = generate_random_matrix[i];
                x++;
            }
        }
        if (/^[,]+$/.test(generate_random_matrix[i][i])) {

            if (generate_random_matrix[i] != ",") {
                array[x] = (generate_random_matrix[i][i]);
                x++;
            }
        }
    }
    //console.log(array);
    while (array.length) generate_random_matrix_copy_without_commas.push(array.splice(0, 4));
    console.log(generate_random_matrix_copy_without_commas);
    FwAlgo();
} //end run

function FwAlgo() {
    //Implement your solution here
    var i = 0;
    var j = 0;
    var k = 0;
    const time_start = performance.now()
    for (var k = 0; k < from_input_N_value; k++) {
        for (var i = 0; i < from_input_N_value; i++) {
            for (var j = 0; j < from_input_N_value; j++) {

                generate_random_matrix_copy_without_commas[i][j] |= (generate_random_matrix_copy_without_commas[i][k] && generate_random_matrix_copy_without_commas[k][j]);

            }
        }
    }
    const time_end = performance.now()
    console.log(generate_random_matrix_copy_without_commas);
    divOutput.innerHTML = "<p>Transitive Closure of the Relation Is:</p>"

    document.getElementById('divOutput').innerHTML += generate_random_matrix_copy_without_commas;
    console.log(time_start - time_end);


    //Mention reference where you got the solution
    //Ref: http://
    //Ref: If you found any paper
} //end sol1