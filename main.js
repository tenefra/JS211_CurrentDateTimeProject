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
typeof true
// * Null
typeof null
// * Undefined
let dontDefine
typeof dontDefine
// * Number
typeof 4
// * NaN
console.log(typeof NaN)
// * String
typeof "hello"

const Type = input => {
  if (typeof input === Boolean) {
    console.log(`${input} is a boolean`)
  } else if (typeof input === null) {
    console.log(`${input} is null`)
  }
}

const dataType = () => {
  const input = document.querySelector(".type-input").value
  const type = typeof input
  console.log(type)
  if (input == "true" || "false") {
    document.getElementById("display-type").innerHTML = "Boolean"
  } else {
    document.getElementById("display-type").innerHTML = type
  }
}

// Write a JavaScript program that adds 2 numbers together.
const add = (a, b) => {
  const sum = a + b
  console.log(`The sum of ${a} and ${b} is ${sum}`)
}

add(5, 2)

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.
const ifBoth = () => {
  if (a && b) {
    return "both are true!"
  } else if (c || d) {
    return "one is true!"
  } else if (!c || d) {
    return "neither are true!"
  } else {
    return
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
