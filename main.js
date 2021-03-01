// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date())

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate
}

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
  const num = document.querySelector(".number-input").value
  const stringNumber = num.toString()
  document.getElementById("display-string").innerHTML = stringNumber
}

// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {
  const string = document.querySelector(".string-input").value
  const numberString = parseInt(string)
  document.getElementById("display-number").innerHTML = numberString
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
console.log(typeof true)
// * Null
console.log(typeof null)
// * Undefined
let dontDefine
console.log(typeof dontDefine)
// * Number
console.log(typeof 4)
// * NaN
console.log(typeof NaN)
// * String
console.log(typeof "hello")

// Really want to get the below to work but having trouble since input is always read as a string. Going to find a workaround for now, but will leave his for reference where I was struggling.

// const dataType = () => {
//   const typeInput = document.querySelector(".type-input").value
//   if (typeof typeInput === "boolean") {
//     console.log(`${typeInput} is a boolean`)
//   } else if (typeof typeInput === null || typeInput === "null") {
//     console.log(`${typeInput} is null`)
//   } else if (typeof typeInput === undefined || typeInput === "undefined") {
//     console.log(`${typeInput} is undefined`)
//   } else if (typeof typeInput === Number) {
//     console.log(`${typeInput} is a number`)
//   } else if (typeof typeInput === NaN || typeInput === "NaN") {
//     console.log(`${typeInput} is NaN`)
//   } else if (typeof typeInput === "string") {
//     console.log(`${typeInput} is a string`)
//   } else if (typeInput === "hello") {
//     console.log("hi")
//   }
// }

const dataType = () => {
  const typeInput = document.querySelector(".type-input").value
  if (typeInput.toLowerCase() == "true" || typeInput == "false") {
    document.getElementById("display-type").innerHTML = `${typeInput} is a boolean`
  } else if (typeof typeInput === null || typeInput === "null") {
    document.getElementById("display-type").innerHTML = `${typeInput} is null`
  } else if (typeof typeInput === undefined || typeInput == "") {
    document.getElementById("display-type").innerHTML = `Input is undefined`
  } else if (typeof parseInt(typeInput) === "number") {
    document.getElementById("display-type").innerHTML = `${typeInput} is a number`
  } else if (typeof typeInput === NaN || typeInput.toLowerCase() === "nan") {
    document.getElementById("display-type").innerHTML = `${typeInput} is NaN`
  } else if (typeof typeInput === "string") {
    document.getElementById("display-type").innerHTML = `${typeInput} is a string`
  }
}

// Write a JavaScript program that adds 2 numbers together.
const add = (a, b) => {
  const sum = a + b
  console.log(`The sum of ${a} and ${b} is ${sum}`)
}

add(5, 2)

const addInApp = () => {
  const numberOne = parseInt(document.querySelector(".first-number").value)
  const numberTwo = parseInt(document.querySelector(".second-number").value)
  const sum = numberOne + numberTwo
  const displaySum = `The sum of ${numberOne} and ${numberTwo} is ${sum}`
  document.getElementById("display-sum").innerHTML = displaySum
}

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.
const ifBoth = () => {
  const booleanOne = document.querySelector(".first-boolean").value
  const booleanTwo = document.querySelector(".second-boolean").value
  if (booleanOne == "true" && booleanTwo == "true") {
    document.getElementById("display-true").innerHTML = "both are true!"
  } else if (booleanOne == "true" || booleanTwo == "true") {
    document.getElementById("display-true").innerHTML = "one is true!"
  } else if (booleanOne == "false" && booleanTwo == "false") {
    document.getElementById("display-true").innerHTML = "neither are true!"
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
