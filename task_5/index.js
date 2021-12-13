function ArraySorting() {
    this.sortMethod = (array) => {
        array.sort((a, b) => {
            if (a > b) {
                return 1
            }
            else if (b < a) {
                return -1
            }
            else {
                return 0
            }
        })
        return array
    }
    this.selectionSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            let minItemIndex = i
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minItemIndex]) {
                    minItemIndex = j
                }
            }
            let itemToRemember = array[i]
            array[i] = array[minItemIndex]
            array[minItemIndex] = itemToRemember
        }
        return array
    }
    this.bubbleSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j + 1] < array[j]) {
                    let itemToRemember = array[j + 1]
                    array[j + 1] = array[j]
                    array[j] = itemToRemember
                }
            }
        }
        return array
    }
    this.insertionSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > item) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = item;
        }
        return array
    }
}
let sorting = new ArraySorting()
  //console.log(sorting.sortMethod([5,7,3,6,9,10]))