const number = parseInt(Math.random() * 5) + 1
console.log(number)
if ( number == 1 ) {
    console.log("おめでとう")   
} else if ( number <= 2 ) {
    console.log("もう少し")
} else {
    console.log("残念")
}

const age = parseInt(Math.random() * 40) + 1
console.log(`${age}歳`)
if ( age < 20) {
    console.log("未成年です")
} else {
    console.log("成人です")
}