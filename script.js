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