// Interview Question

// Recursion

// Date : - 14-05-2024
// =================================================================================================================
// Question 1 . Calculate the factorial value using recursion ------------------------------------------------------


const findFact = (data) => {
    if (data === 1) {
        return 1
    }
    return data * findFact(data - 1)

}

const fact = findFact(5)
console.log(fact);


// =================================================================================================================
// Question 2 . Calculate the fibonacci series value using recursion -----------------------------------------------


const findFibonacci = (data) => {
    if (data <= 1) {
        return data
    }
    return findFibonacci(data - 1) + findFibonacci(data - 2)

}

const fibonacci = findFibonacci(5)
console.log(fibonacci);


// =================================================================================================================
// Question 3 . write a code to repeat string ----------------------------------------------------------------------


const repeatString = (str, num) => {
    let newStr = '';
    if (num === 0) {
        return str
    }
    for (let i = 0; i < num; i++) {
        newStr = newStr + str
    }
    return newStr;
}

const repeated = repeatString('developer', 4);
console.log(repeated);


const repeatStr = (str, num) => {
    return num > 0 ? str.repeat(num) : str
}

const repeat = repeatStr('developer', 0);
console.log(repeat);


// =================================================================================================================
// Question 4 . write a code to truncate string --------------------------------------------------------------------


const truncateStr = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num).concat('...')
    }
    return str
}


const trunc = truncateStr('web developer', 9);
console.log(trunc);


const truncStr = (str, num) => {
    return num >= 0 ? str : str.slice(0, num).concat('...')
}


const truncate = truncStr('web developer', 20);
console.log(truncate);


// =================================================================================================================
// Question 5 . write a code to make a range btn two numbers -------------------------------------------------------


const numRange = (num1, num2) => {
    let range = [];
    // for (let i = num1; i <= num2; i++) {
    //     range.push(i)
    // }
    // return range
    while (num1 <= num2) {
        range.push(num1);
        num1++
    }
    return range

}

const range = numRange(-8, 2);
console.log(range);



// =================================================================================================================
// Question 6 . write a code to make a range btn two numbers using recursion ---------------------------------------


const numberRange = (a, b, arr = []) => {
    if (a <= b) {
        arr.push(a)
        return numberRange(a + 1, b, arr)
    }
    return arr
}


const rangeNum = numberRange(-8, 2);
console.log(rangeNum);