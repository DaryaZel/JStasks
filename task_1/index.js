function ArrayHandler() {

    this.getMaxSubSumOn2 = function (array) {
        let maxSum = 0
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum = array[i]
            if (sum > maxSum) {
                maxSum = sum
            }
            for (let j = i + 1; j < array.length; j++) {
                sum += array[j]
                if (sum > maxSum) {
                    maxSum = sum
                }
            }
        }
        return maxSum
    }
    this.getMaxSubSumOn = function (array) {
        let maxSum = 0;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            maxSum = Math.max(maxSum, sum);
            if (sum < 0) {
                sum = 0;
            }
        }
        return maxSum
    }
    this.selectionTask = function (array) {
        let newArray = []
        let longestArray = []
        for (let i = 0; i < array.length; i++) {
            if (i != array.length - 1 && array[i] < array[i + 1]) {
                newArray.push(array[i])
            }
            else {
                newArray.push(array[i])
                if (newArray.length > longestArray.length) {
                    longestArray = [...newArray]
                }
                newArray.length = 0
            }
        }
        return longestArray
    }

    this.search = function (array) {
        let median
        let min
        let max
        let result
        array.sort((a, b) => {
            if (a > b) {
                return 1
            }
            else if (a < b) {
                return -1
            }
            else {
                return 0
            }
        })
        min = array[0]
        max = array[array.length - 1]
        if (array.length % 2) {
            median = array[(array.length - 1) / 2]
        }
        else {
            median = (array[array.length / 2] + array[array.length / 2 - 1]) / 2
        }
        return result = `Минимальное значение: ${min}, максимальное значение: ${max}, медиальное значение: ${median}.`
    }
}
let arrayHandler = new ArrayHandler()
    //console.log(arrayHandler.getMaxSubSumOn2([2, -1, 2, 3, -9]))
    //console.log(arrayHandler.getMaxSubSumOn([2, -1, 2, 3, -9]))
    //console.log(arrayHandler.search([2, -1, 2, 3, -9]))
    //console.log(arrayHandler.selectionTask([2, -1, 2, 3, -9]))