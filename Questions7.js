// Interview Question


// Date : - 16-05-2024
// =================================================================================================================
// Question 1 . Currency Converter ---------------------------------------------------------------------------------

const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 83
}

const currencyConverter = (amount, c1, c2) => {
    let amountInUSD = 0;
    if (c1 !== "USD") {
        amountInUSD = amount / rates[c1];
    }
    else {
        amountInUSD = amount;
    }

    let convertedAmount = 0;
    if (c2 !== "USD") {
        convertedAmount = amountInUSD * rates[c2]
    } else {
        convertedAmount = amountInUSD;
    }
    return convertedAmount;
}

const amount = currencyConverter(1, "INR", "USD")
console.log(amount);



// =================================================================================================================
// Question 2 . Validate a Credit card no. (Luhr Algorithm ) -------------------------------------------------------


const validateCreditCard = (str) => {
    str = str.replace(/\D/g, "")
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i]
    }
    console.log(revStr);
    let doubled = revStr.split("").map((curElem, index) => {
        if (index % 2 !== 0) {
            curElem = curElem * 2;
            if (curElem > 9) {
                curElem = curElem - 9;
            }
        }
        return curElem
    })
    let sumArr = doubled.reduce((accum, curElem) => accum = accum + Number(curElem), 0)
    console.log(sumArr);
    if (sumArr % 10 === 0) {
        return `${str} : is a valid Credit card number`
    }
    else {
        return `${str} : is not a valid Credit card number`
    }
}

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));



// =================================================================================================================
// Question 3 . FiZZBuZZ - LeetCode Problem ------------------------------------------------------------------------


const findFizzBuzz = (num1, num2) => {
    let arr = [];
    for (let i = num1; i < num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FiZZBuZZ")
        }
        else if (i % 3 === 0) {
            arr.push("FiZZ")
        }
        else if (i % 5 === 0) {
            arr.push("BuZZ")
        }
        else {
            arr.push(i)
        }
    }
    return arr

}

console.log(findFizzBuzz(3, 89));




// =================================================================================================================
// Question 4 . Validate Email using REGEX -------------------------------------------------------------------------

const validateEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)
}

console.log(validateEmail("developer@gmail.com"));




// =================================================================================================================
// Question 5 . Validate Password using REGEX -------------------------------------------------------------------------

const validatePassword = (pass) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/.test(pass)
}

console.log(validatePassword("Develop@12"));


// =================================================================================================================
// Question 6 . Validate Password using REGEX -------------------------------------------------------------------------

const validateMobNum = (mobNum) => {
    return /^[6789][\d]{9}$/.test(mobNum)
}

console.log(validateMobNum("9876543215"));


// =================================================================================================================
// Question 7 . Extract Numbers from String using REGEX -------------------------------------------------------------------------

const extractNum = (str) => {
    let regex =  /\d+/g;
    return str.match(regex)
}

console.log(extractNum("dfg56hgyh644hgjh678"));
console.log(extractNum("h6a3d7h5"));


// =================================================================================================================
// Question 8 . Hex Validation from String using REGEX -------------------------------------------------------------------------

const validateHex = (str) => {
    return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(str)
}

console.log(validateHex("#a9c3dd"));
console.log(validateHex("#fff"));
console.log(validateHex("#gadyd6"));


// =================================================================================================================
// Question 9 . Date Validation from String using REGEX -------------------------------------------------------------------------

const validateDate = (date) => {
    return /^((19|20)[0-9]{2})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[0-1])$/.test(date)
}

console.log(validateDate("2010-04-03"));
console.log(validateDate("2009-09-22"));
console.log(validateDate("2019-10-17"));
console.log(validateDate("1919-12-32"));

