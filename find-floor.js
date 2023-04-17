function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1

    //edge cases
    if (arr[leftIdx] > num) {
        return -1
    } else if (arr[rightIdx] < num) {
        return arr[rightIdx]
    }

    //binary search
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
        let midVal = arr[midIdx];
        let rightNum = arr[midIdx + 1]

        if (midVal > num){
            rightIdx = midIdx - 1;
        } else if (midVal < num){
            if(num > rightNum){
                leftIdx = midIdx + 1
            }
            if (num < rightNum ){
                return midVal
            }
        }
    }
    return -1
}

module.exports = findFloor