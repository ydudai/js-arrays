// ---------------------------------------------
// Ex 1 
// ---------------------------------------------
const numArray = [0, 2, 5, 100, 3, 10, 4];
console.log("Original array: " + numArray);

// Array is sorted as strings
//numArray.sort();
//console.log(numArray);

// Array is sorted as numbers - A
//numArray.sort(function compare(a, b) {
//     if ((a - b) > 0) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// Array is sorted as numbers - form B
//numArray.sort(function (a, b) { return a - b });
//console.log(numArray);

// Array is sorted as numbers - form C
//numArray.sort( (a, b) => { a - b });
//console.log(numArray);

// Array is sorted as numbers - form C
//numArray.sort( (a, b) => { a - b });

// Array is sorted as numbers - form D
numArray.sort((a, b) => a - b);
console.log("Sorted array: " + numArray);

// ---------------------------------------------
// Ex 2
// ---------------------------------------------
function sameValuesArray(arrA, arrB) {
    let newArr = []; let longArr = []; let shortArr = [];
    let lenA = arrA.length;
    let lenB = arrB.length;


    if (lenA >= lenB) {
        longArr = arrA;
        shortArr = arrB;
    } else {
        longArr = arrB;
        shortArr = arrA;
    }

    for (let i = 0; i < longArr.length; i++) {
        const element1 = longArr[i];

        for (let j = 0; j < shortArr.length; j++) {
            const element2 = shortArr[j];
            if (element2 == element1) {
                if (newArr.indexOf(element2) == -1) {
                    newArr.push(element1);
                }
            }
        }
    }

    newArr.sort((a, b) => a - b);
    return newArr;
}

console.clear();
const arrA = [1, 2, 1, 2, 1];
console.log("1st. Array: " + arrA);
const arrB = [2, 2, 2, 1, 3, 1, 2];
console.log("2nd. Array: " + arrB);
let newArr = sameValuesArray(arrA, arrB)
console.log("newArr: " + newArr);
// ---------------------------------------------


// ---------------------------------------------
// Ex 3 - matrix 
// ---------------------------------------------
let items = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function print2DArrayElements(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
document.write("<br>");
console.log("Input 2D array");
print2DArrayElements(items);


function average(items) {
    let sum = 0;
    let avg = 0;
    let totalLength = 0;
    for (let i = 0; i < items.length; i++) {
        totalLength += items[i].length;

        for (let j = 0; j < items[i].length; j++) {
            sum += items[i][j]
        }
    }

    if (totalLength != 0) {
        avg = sum / totalLength;
    }
    return avg;
}

let avg = average(items);
console.log("Average of items: " + avg);
// ---------------------------------------------


// ---------------------------------------------
// Ex 4 - Remove selected element from array 
// ---------------------------------------------
const nums = [10, 30, 20, 10, 40, 20];
//const nums = [20, 20, 10, 30, 20, 10, 40, 20];
//const nums = [10, 20, 20, 10, 20, 20];

console.log("Original array: " + nums);

function removeElementFromArray(arr, searchElement) {
    console.log("searchElement: " + searchElement);

    let inds = findAllIndices(arr, searchElement);
    console.log("Found indices: " + inds);

    let numPops = 0;
    let lastIndex = nums.length - 1;
    let popedArr = [];
    let k = 0;

    for (let i = inds.length - 1; i >= 0; i--) {
        numPops = lastIndex - inds[i] + 1;
        for (let j = 0; j < numPops; j++) {
            popedArr[k] = nums.pop();
            k++;
            lastIndex -= 1;
        }

        pos = inds[i];
        for (let n = popedArr.length - 2; n >= 0; --n) {
            nums[pos] = popedArr[n];
            pos += 1;
        }
        lastIndex = nums.length - 1;
        popedArr = [];
        k = 0;
        //console.log("nums: " + nums );
    }

}

function findAllIndices(arr, searchElement) {
    let inds = [];
    let k = 0;
    let fromIndex = 0;
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        index = nums.indexOf(searchElement, fromIndex);
        if (index != -1) {
            inds[k] = index;
            k++;
            fromIndex = index + 1;
            if (fromIndex > (nums.length - 1)) {
                break;
            }
        }
    }

    return inds;
}

removeElementFromArray(nums, 20);
console.log("Result: " +  nums);
// ---------------------------------------------
