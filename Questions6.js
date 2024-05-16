// Interview Question


// Date : - 15-05-2024
// =================================================================================================================
// Question 1 . Password Vaidatation -------------------------------------------------------------------------------


const validatePass = (str) => {
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    if (str.lengh <= 0) {
        return false
    }
    for (const i of str) {
        if (i.charCodeAt(i) >= 65 && i.charCodeAt(i) <= 90) {
            hasLowerCase = true;
        }
        else if (i.charCodeAt(i) >= 97 && i.charCodeAt(i) <= 122) {
            hasUpperCase = true;
        }
        else if (!isNaN(Number(i))) {
            hasNumber = true;
        }
    }
    if (!hasLowerCase || !hasUpperCase || !hasNumber || str.lengh > 8) {
        return false
    }
    return true

}


const password = validatePass('heraafeas1');
console.log(password);



// =================================================================================================================
// Question 2 . Hex Code Generator ---------------------------------------------------------------------------------


const generateHex = () => {
    let hex = '#';
    let num = Math.random().toString(16)
    hex = hex + num.slice(2, 8).padEnd(6, 0).toUpperCase();
    return hex;
}

const hex = generateHex();
console.log(hex);



// =================================================================================================================
// Question 3 . Check wheather the given obj isEmpty or Not --------------------------------------------------------

const isEmpty = (obj) => {
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            return `is not empty`;
        }
    }
    return `is empty`;

    // return Object.keys(obj).length === 0;
}

const emptyOrNot = isEmpty({});
console.log(emptyOrNot);



// =================================================================================================================
// Question 4 . Convert Array in Object and Vise versa -------------------------------------------------------------


const obj = {
    name: 'dev',
    age: '24',
    city: 'delhi'
};

let arr = Object.entries(obj)
console.log(arr);

let newObj = Object.fromEntries(arr)
console.log(newObj);


// =================================================================================================================
// Question 5 . Simple interest calculator -------------------------------------------------------------------------


const simpleInterest = (p, r, t) => {
    return (p * r * t) / 100
}


const interest = simpleInterest(1000, 5, 3);
console.log(interest);


// =================================================================================================================
// Question 6 . find no. of dates btn two dates ---------------------------------------------------------------------


const findDates = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    let diff = Math.abs(d2 - d1)
    return diff / (24 * 60 * 60 * 1000)
}


const dates = findDates('2012-03-01', '2012-04-01');
console.log(dates);



// =================================================================================================================
// Question 7 . find age by given D.O.B ----------------------------------------------------------------------------


const findAge = (d) => {
    let today = new Date()
    let date = new Date(d);
    let age = (today - date)
    console.log(age);
    return Math.floor(age / (12 * 30 * 24 * 60 * 60 * 1000))
}

const age = findAge('1976-02-05');
console.log(age);


const findYearOld = (d) => {
    let today = new Date()
    let date = new Date(d);

    let age = today.getFullYear() - date.getFullYear();
    console.log(age);

    let diff = today.getMonth() - date.getMonth()
    if (diff < 0 || diff === 0 && today.getDate() < date.getDate() ) {
        age--;
    }
    return age
}

const yearOld = findYearOld('1976-02-05');
console.log(yearOld);



// =================================================================================================================
// Question 8 . generate a bar chart -------------------------------------------------------------------------------


const generateBarChart = (arr) => {
    // const newArr = arr.map((curElem, index)=>{
    //     let star = '';
    //     let no = 0;
    //     while (no<curElem) {
    //         star = star + '*';
    //         no++;
    //     }
    //     return `${index+1}- ${no} : ${star}`;
    // });
    // return newArr.join("\n")

    return arr.map((curElem,index)=> {
        return `${index+1}- ${curElem}:- ${"*".repeat(curElem)}`
    })
    .join("\n");

    
}

const chart = generateBarChart([5,1,7,4,2])
console.log(chart);