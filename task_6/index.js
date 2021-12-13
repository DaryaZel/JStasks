
function transformToDecimal(numberArray) {
    return numberArray.map((item, index) => item * Math.pow(2, index)).reduce((a, b) => a + b).toString().split('').map(item => parseInt(item)).reverse()
}

function transformToBinary(numberArray) {
    let binaryNumber = '';
    let number = numberArray.reverse().join('')
    while (number > 0) {
        binaryNumber += number % 2;
        number = parseInt(number / 2);
    }

    return binaryNumber.split(``).map(item => parseInt(item));
}
  //console.log(transformToDecimal([1, 0, 1, 1]));
  //console.log(transformToBinary([3,1]))