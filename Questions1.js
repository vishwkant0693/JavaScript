// Interview Question


// Date : - 10-05-2024
// =================================================================================================================
// Question 1 . Find the longest word in an array/string -----------------------------------------------------------


const words = ['enemy', 'friend', 'ammo', 'sing', 'smartphone', 'mouse', 'intelligence']

// Using reduce
console.log(words.reduce((accum, curWord) => curWord.length > accum.length ? curWord : accum, ""));

// Using for-of loop 
const findLongestWord = (words) => {
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const longestWord = findLongestWord(words)
console.log('the longest word in the array : ', longestWord);


// Using sort
const longWord = (text) => {
    if (text.trim().length === 0) {
        return false
    }
    long = text.split(" ")
    long = long.sort((a, b) => b.length - a.length);
    console.log(long[0]);
};
longWord("Hello i am a web developer")



// =================================================================================================================
// Question 2 . Convert string into hashtag in an string -----------------------------------------------------------

const str = 'make this a hash tag'


// Using map and replace
const hashTag = (str) => {
    if (str.length > 280 || str.length === 0) {
        return false
    }
    str = str.split(" ")
    str = str.map((curElem) => (
        curElem.replace(curElem[0], curElem[0].toUpperCase())
    ))
    str = `#${str.join("")}`
    console.log(str);
    return str;
}

const makeHash = hashTag(str)
console.log(makeHash);


// Using CharAt and Slice
const hashTags = (str) => {
    if (str.length > 280 || str.length === 0) {
        return false
    }
    str = str.split(" ")
    str = str.map((curElem) => (
        curElem.charAt(0).toUpperCase() + curElem.slice(1)
    ))
    str = `#${str.join("")}`
    console.log(str);
}

hashTags(str)



// =================================================================================================================
// Question 3 . Find the repeated char in a given string -----------------------------------------------------------


const findRepeat = (givenStr, givenChar) => {
    givenStr = givenStr.toLowerCase()
    givenChar = givenChar.toLowerCase()
    givenStr = givenStr.split("")

    return givenStr.reduce((accum, curElem) => curElem === givenChar ? accum += 1 : accum, 0)
}


const repeatChar = findRepeat('Phllip', 'p')
console.log(repeatChar);



// =================================================================================================================
// Question 4 . Find the type of triangle in a given string --------------------------------------------------------


const findTriAngle = (a, b, c) => {
    let type = '';
    if (a === b && b === c) {
        return type = 'Equilateral';
    }
    else if (a === b || b === c || a === c) {
        return type = "Isosceles";
    }
    else {
        return type = "Scalene ";
    }
    console.log(type);
}


const triType = findTriAngle(4, 6, 5)
console.log(triType);



// =================================================================================================================
// Question 5 . Ascending order ------------------------------------------------------------------------------------


const acendOrder = (arr) => {
    return arr.sort((a, b) => a - b)
}


const ascOrder = acendOrder([9, 6, 8, 3, 5, 1, 2, 4, 7, 11, 60, 12, 30, 14])
console.log(ascOrder);




// =================================================================================================================
// Question 6 . Palindrome  ----------------------------------------------------------------------------------------


// Using for-of loop then unshift
const isPalindrome = (text) => {
    text = text.toLowerCase().replace(/\W/g,'')
    textArr = text.split("")
    let palin = [];
    for (const i of textArr) {
        palin.unshift(i)
    }
    let p = palin.join("")
    if (text == p) {
        return `${text} is a palindrome`;
    }
    else {

        return `${text} is not a palindrome`;
    }
}

const palindRome = isPalindrome('racecar')
console.log(palindRome);


// Using Reverse then join
const isPal = (text) => {
    text = text.toLowerCase().replace(/\W/g,'')
    let textArr = text.split("").reverse().join("")
    return text === textArr ? `${text} is a palindrome` : `${text} is not a palindrome`
}

const pal = isPal('hello')
console.log(pal);

