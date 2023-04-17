function findRotationCount(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if ( arr[leftIdx] < arr[rightIdx]){
        return 0
    }

    let arrSmallestIdx;

    //variables for stored nums
    let firstNum = arr[leftIdx];
    let lastNum = arr[rightIdx];

    //check if stored nums are the num we are looking for

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx) / 2)
        let midVal = arr[midIdx];

        // found sort rotation point
        if (midVal < arr[midIdx - 1]) {
            return midIdx
        } else if (midVal > arr[midIdx + 1]) {
            return midIdx + 1
        } else if (midVal < arr[midIdx + 1] && midVal < firstNum) {
            rightIdx = midIdx;
        } else if (midVal > arr[midIdx - 1] && midVal > lastNum) {
            leftIdx = midIdx;
        }
    }

    return arrSmallestIdx;
}

module.exports = findRotationCount