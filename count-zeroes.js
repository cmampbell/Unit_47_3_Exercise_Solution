function countZeroes(arr) {
  // start at midIdx
  // trying to find first 0 in array
  // if midIdx = 1, move left idx to mid idx
    // if arr[midIdx + 1] = 0 return arr.length - midIdx
  // if midIdx = 0, move right idx to mid idx
    // if arr[midIdx -1] = 1 return arr.length - midIdx

    if (arr[0] === 0) return arr.length
    
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2)
        let midVal = arr[midIdx];

        if(midVal === 1){
            if (arr[midIdx + 1] === 0){
                return arr.length - (midIdx + 1)
            } else {
                leftIdx = midIdx + 1
            }
        } else if (midVal === 0){
            if (arr[midIdx - 1] === 1){
                return arr.length - midIdx
            } else {
                rightIdx = midIdx - 1
            }
        }
    }
    return 0;
}

module.exports = countZeroes