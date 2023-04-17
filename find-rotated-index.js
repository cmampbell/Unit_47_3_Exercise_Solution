// function findRotatedIndex(arr, num) {
//     // rotated array - nums are sorted, but index is shifted

//     // find point where array shifts

//     // check if num is larger than last num and less than largest num
//     // check if num is larger than smallest num and less than last num

//     // returns index of num in the array or -1

//     //variables for indexes

//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     let arrLargestIdx;
//     let arrSmallestIdx;

//     //variables for stored nums
//     let firstNum = arr[leftIdx];
//     let lastNum = arr[rightIdx];
//     let largestNum;
//     let smallestNum;

//     //check if stored nums are the num we are looking for
//     if(firstNum === num){
//         return leftIdx
//     } else if(lastNum === num){
//         return rightIdx
//     }

//     while (!largestNum && !smallestNum){
//         let midIdx = Math.floor((rightIdx + leftIdx)/2)
//         let midVal = arr[midIdx];

//         if(midVal === num){
//             return midIdx;
//             // found sort rotation point
//         } else if (midVal < arr[midIdx - 1]){
//             // set largest index and smallest index
//             arrLargestIdx = midIdx - 1;
//             arrSmallestIdx = midIdx;

//             //set largest num and smallest num
//             largestNum = arr[arrLargestIdx]
//             smallestNum = arr[arrSmallestIdx]

//         } else if (midVal > arr[midIdx + 1]){
//             arrLargestIdx = midIdx;
//             arrSmallestIdx = midIdx + 1

//             largestNum = arr[arrLargestIdx]
//             smallestNum = arr[arrSmallestIdx]
//         } else if (midVal < arr[midIdx + 1] && midVal < firstNum){
//             rightIdx = midIdx;
//         } else if (midVal > arr[midIdx -1] && midVal > lastNum){
//             leftIdx = midIdx;
//         }
//     }

//     if(largestNum === num){
//         return arrLargestIdx;
//     } else if (smallestNum === num){
//         return arrSmallestIdx;
//     }

        
//     // break that into smaller array where num will be
//     if(num < largestNum && num > firstNum){
//         leftIdx = 0;
//         rightIdx = arrLargestIdx;
//     } else if (num > smallestNum && num < lastNum){
//         leftIdx = arrSmallestIdx;
//         rightIdx = arr.length - 1
//     }

//     // search through those arrays until num is found
//     while (leftIdx <= rightIdx){
//         let midIdx = Math.floor((rightIdx + leftIdx)/2)
//         let midVal = arr[midIdx];

//         if(midVal === num){
//             return midIdx
//         } else if (num < midVal){
//             rightIdx = midIdx -1;
//         } else if (num > midVal){
//             leftIdx = midIdx + 1;
//         }
//     }

//     return -1
// }


// after thinking about it some more
function findRotatedIndex(arr, num){
    //variables for indexes

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    //variables for stored nums
    let firstNum = arr[leftIdx];
    let lastNum = arr[rightIdx];

    if(firstNum === num){
        return leftIdx
    } else if (lastNum === num){
        return rightIdx
    }

    while(leftIdx <= rightIdx ){
        let midIdx = Math.floor((rightIdx + leftIdx)/2)
        let midVal = arr[midIdx]

        if(midVal === num) {
            return midIdx;
        } else if (num < firstNum){
            if (num < midVal && midVal >= lastNum){
                leftIdx = midIdx + 1;
            } else if (num > midVal && midVal >= lastNum){
                leftIdx = midIdx + 1
            } else if (num < midVal && midVal <= lastNum){
                rightIdx = midIdx - 1;
            } else if (num > midVal && midVal <= lastNum){
                leftIdx = midIdx + 1;
            }
        } else if (num > lastNum){
            if ( num < midVal && midVal >= firstNum){
                rightIdx = midIdx - 1
            } else if(num > midVal && midVal >= firstNum){
                leftIdx = midIdx + 1
            } else if (num > midVal && midVal <= firstNum){
                rightIdx = midIdx - 1 
            }
        }
    }

    return -1
}

module.exports = findRotatedIndex