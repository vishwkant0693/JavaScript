// Interview Question


// Date : - 12-05-2024
// =================================================================================================================
// Question 1 . Find the no. of vowels in a string -----------------------------------------------------------------


const findNoVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    str = str.split("")
    let count = 0;
    for (const i of str) {
        if (vowels.includes(i)) {
            count++
        }
    }
    return count
}



const vowels = findNoVowels("developer")
console.log(vowels);



// =================================================================================================================
// Question 2 . Find the given no. is a power of Two ---------------------------------------------------------------


const isPowerOfTwo = (data) => {
    let result = false;
    for (let i = 0; i < data; i++) {
        if (2 ** i === data) {
            result = true
        }

    }
    return result
}

const Power = isPowerOfTwo(8)
console.log(Power);



// =================================================================================================================
// Question 3 . Find the sum of the squares given elements ---------------------------------------------------------


const findSum = (arr) => {
    return arr.reduce((Accum, CurElem) => Accum = Accum + CurElem * CurElem, 0)
}

const sum = findSum([2, 4])
console.log(sum);


// =================================================================================================================
// Question 4 . Find the minimum no. in an array -------------------------------------------------------------------


const findMin = (arr) => {
    arr.sort((a, b) => a - b)
    return arr[0]
}


const minVal = findMin([2, 4, 6, 8, 1, 3, -7, 3])
console.log(minVal);


// =================================================================================================================
// Question 5 . Convert a string into CamelCase and Snake_Case  ----------------------------------------------------


const toCamelCase = (str) => {
    str = str.trim().split(" ")
    str = str.map((val, index) => {
        if (index === 0) {
            return val.toLowerCase()
        }
        else {
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
        }
    })
    str = str.join("")
    return str
}

const camCase = toCamelCase("hello developer")
console.log(camCase);


const toSnakeCase = (str) => {
    return str.toLowerCase().replace(" ", "_")
}

const snakeCase = toSnakeCase("hello Developer")
console.log(snakeCase);


// =================================================================================================================
// Question 6 . Check wheather the alphabet is a lowerCase or UpperCase --------------------------------------------


const toUpper = (str) => {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        return true
    }
    return false
}

const UpperCase = toUpper("R")
console.log(UpperCase);


const toLower = (str) => {
    if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
        return true
    }
    return false
}

const LowerCase = toLower("R")
console.log(LowerCase);

