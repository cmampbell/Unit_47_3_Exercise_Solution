function sortedFrequency(arr, num) {
    // binary search to find first and last instance of num
    // need two sets of pointers that change at the same time
    // leftIdxStart, rightIdxStart, midIdxStart
    // leftIdxEnd, rightIdxEnd, midIdxEnd

    let startLeftIdx = 0;
    let startRightIdx = arr.length - 1;
    let endLeftIdx = 0;
    let endRightIdx = arr.length - 1;
    let foundStartIdx;
    let foundEndIdx;

    // cover edge case of 1 instance of num, avoid search
    if (arr[startLeftIdx] === num){
        foundStartIdx = 0
        if( arr[startLeftIdx + 1] > num){
            return 1
        }
    } else if (arr[startRightIdx] === num){
        foundEndIdx = startRightIdx
        if (arr[startRightIdx - 1] < num){
            return 1
        }
    }


    while (startLeftIdx <= startRightIdx && endLeftIdx <= endRightIdx) {
        //search for start index
        if (!foundStartIdx) {
            let startMidIdx = Math.floor((startLeftIdx + startRightIdx) / 2)
            let startMidVal = arr[startMidIdx];

            if (startMidVal === num) {
                if (arr[startMidIdx - 1] > num) {
                    foundStartIdx = startMidIdx;
                } else {
                    startRightIdx = startMidIdx - 1;
                }
            } else if (startMidVal > num) {
                if (arr[startMidIdx - 1] === num) {
                    foundEndIdx = startMidIdx - 1;
                    startRightIdx = startMidIdx - 1;
                } else {
                    startRightIdx = startMidIdx;
                }
            } else if (startMidVal < num) {
                if (arr[startMidIdx + 1] === num) {
                    foundStartIdx = startMidIdx + 1
                } else {
                    startLeftIdx = startMidIdx + 1
                }
            }
        }

        // search for end index
        if (!foundEndIdx) {
            let endMidIdx = Math.floor((endLeftIdx + endRightIdx) / 2)
            let endMidVal = arr[endMidIdx];

            if (endMidVal === num) {
                if (arr[endMidIdx + 1] > num) {
                    foundEndIdx = endMidIdx + 1;
                } else {
                    endLeftIdx = endMidIdx + 1
                }
            } else if (endMidVal > num) {
                if (arr[endMidIdx - 1] === num) {
                    foundEndIdx = endMidIdx - 1;
                } else {
                    endRightIdx = endMidIdx - 1
                }
            } else if (endMidVal < num) {
                if (arr[endMidIdx + 1] === num) {
                    foundStartIdx = endMidIdx + 1
                    endLeftIdx = endMidIdx + 1
                } else {
                    endLeftIdx = endMidIdx + 1
                }
            }
        }

        if (foundStartIdx > -1 && foundEndIdx > -1) {
            return foundEndIdx - foundStartIdx
        }
    }

    return -1;
}

module.exports = sortedFrequency