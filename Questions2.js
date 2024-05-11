// Interview Question


// Date : - 11-05-2024
// =================================================================================================================
// Question 1 . Find the maximum value in an array -----------------------------------------------------------------


// using for-of loop
const findMaxValue = (arr) => {
    let max = 0
    for (const i of arr) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

const maxValue = findMaxValue([2, 4, 1, 6, 9, 5, 11, 90, 33, -110, 83])
console.log(maxValue);

// uaing math.max
const findMax = (arr) => {
    return Math.max(...arr)
}


const Value = findMax([-2, -4])
console.log(Value);



// =================================================================================================================
// Question 2 . Find the factorial in a number ---------------------------------------------------------------------


const findFact = (data) => {
    let result = 1;
    for (let i = 1; i <= data; i++) {
        result = result * i
    }
    return result;
}


const fact = findFact(5)
console.log(fact);


// =================================================================================================================
// Question 3 . Find the average of the given array ----------------------------------------------------------------

// using for-of
const findAvgValue = (arr) => {
    let avg = 0
    for (const i of arr) {
        avg = avg + i
    }
    avg = avg / arr.length
    return avg
}

// using reduce
const avgValue = findAvgValue([2, 4, 6, 8])
console.log(avgValue);


const findAvg = (arr) => {
    const total = arr.reduce((accum, CurElem)=> accum + CurElem , 0)
    return total / arr.length
}


const avgVal = findAvg([2, 4, 6, 8])
console.log(avgVal);



// =================================================================================================================
// Question 4 . Find similar array ---------------------------------------------------------------------------------



const findSimilar = (arr, arr1) => {
    if(arr.length !== arr1.length) {
        return false
    }
    return arr.every((curElem, index)=> curElem === arr1[index])
}


const similar = findSimilar([2, 4, 6, 8],[2, 4, 6, 8])
console.log(similar);



// =================================================================================================================
// Question 5 . Find the sum of given value ------------------------------------------------------------------------


const findSum = (val) => {
   let arr = Array.from(String(val), Number)
   return arr.reduce((Accum,curElem)=> Accum += curElem , 0)
}


const result = findSum(2345)
console.log(result);



// =================================================================================================================
// Question 5 . Find the sum of given value ------------------------------------------------------------------------


const removeDuplicate = (arr) => {
    let newArr = new Set(arr)
    return Array.from(newArr)
}

const remove = removeDuplicate([2, 3, 5, 1, 2, 5, 3, 9, 7, 6])
console.log(remove);