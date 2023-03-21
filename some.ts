function isEvent(num) {
    return num % 2 === 0;
}

const array = [1, 3, 5];
// someメソッドよって配列から一つずつ取り出して、isEvent関数に渡している
console.log(array.some(isEvent));