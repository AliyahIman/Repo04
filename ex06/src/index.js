function main (numOne, numTwo){
    // only change code below this line

    var numOne = parseFloat(numOne), numTwo = parseFloat(numTwo);
    var myQuotient = numOne / numTwo;

    // only change code above this line
    return myQuotient;
}

console.log(main(5.0, 2.5));
module.exports = main;