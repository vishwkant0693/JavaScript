// Interview Question


// Date : - 13-05-2024
// =================================================================================================================
// Question 1 . Find the given string starts with fiven substring in a string --------------------------------------

const findSubStr = (str, str1) => {
    str = str.toLowerCase().split(" ")
    let output = false;
    if (str[0] === str1) {
        output = true
    }
    return output

}

const result = findSubStr('Hello developer', 'hello');
console.log(result);

// using startswith
const findSub = (str, str1) => {
    return str.toLowerCase().startsWith(str1.toLowerCase())
}

const sub = findSub('Hello developer', 'hello');
console.log(sub);

// using slice
const startWith = (str, str1) => {
    return str.toLowerCase().slice(0, str1.length) === str1
}

const start = startWith('Hello developer', 'hello');
console.log(start);



// =================================================================================================================
// Question 2 . Write a function to reverse a string ---------------------------------------------------------------


const revStr = (str) => {
    let rev = '';
    str = str.split("")
    for (const i of str) {
        rev = i + rev
    }
    return rev
}

const reverse = revStr('Hello developer');
console.log(reverse);


const ReverseStr = (str) => {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }
    return rev
}

const revString = ReverseStr('Hello developer');
console.log(revString);


// =================================================================================================================
// Question 3 . Write a function to calculate mean of an array -----------------------------------------------------


const calculateMean = (arr) => {
    let result = arr.reduce((Accum, CurElem) => Accum = Accum + CurElem, 0)
    return result / arr.length
}

const mean = calculateMean([2, 4, 6]);
console.log(mean);


// =================================================================================================================
// Question 4 . Write a function to calculate median of an array ---------------------------------------------------


const calculateMedian = (arr) => {
    let arr1 = arr.sort((a, b) => a - b)
    console.log(arr);
    let mid = arr1.length % 2
    if (mid === 0) {
        let median = arr1[arr.length / 2 - 1] + arr1[arr.length / 2]
        return median / 2
    }
    else {
        return arr[arr.length / 2]
    }

}


const median = calculateMedian([2, 4, 6, 8, 1, 3]);
console.log(median);





// =================================================================================================================
// Question 5 . Write a function to find the no. of repeatitive no. in an array -------------------------------------


const calculateRepeat = (arr) => {
    let count = {};
    for (const i of arr) {
        count[i] = (count[i] || 0) + 1;
    }
    return count;
}


const repeat = calculateRepeat([2, 4, 2, 1, 6, 2, 9, 3, 1, 4, 6, 6, 8, 1, 3]);
console.log(repeat);



// =================================================================================================================
// Question 6 . Write a function to calculate mode of an array -----------------------------------------------------


const calculateMode = (arr) => {
    let mode;
    let count = {};
    let maxNum = 0;
    for (const i of arr) {
        count[i] = (count[i] || 0) + 1;
        if (count[i] > maxNum) {
            maxNum = count[i]
            mode = i
        }
    }
    return mode;
}


const mode = calculateMode([2, 4, 2, 1, 6, 2, 9, 3, 1, 4, 6, 6, 8, 1, 3, 1]);
console.log(mode);


