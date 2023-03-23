const array = ["a", "b", "c"]
// console.log(array[array.length - 1]) // c

// 配列を分割代入
const [first, second, third] = array
// console.log(first) // a
// console.log(second) // c

// indexOfメソッドで配列を検索
const array2 = ["Java", "JavaScript", "Ruby"]
// 先頭から検索して見つかった要素のインデックスを返す
const indexOfJS = array2.indexOf("JavaScript")
console.log(indexOfJS) // 1
console.log(array2[indexOfJS]) // JavaScript
// "js"という要素はないため、`-1`が返される
console.log(array2.indexOf("js")) // -1

// `-1`が返されることを活かした条件分岐
if (indexOfJS !== -1) {
    console.log("配列にJavaScriptが含まれている")
} else {
    console.log("配列にJavaScriptが含まれていない")
}

const array3 = ["A", "B", "C", "D", "E"]
// インデックス1から4まで(4の要素は含まない)の範囲を取り出す
console.log(array3.slice(1, 4)) // => [ 'B', 'C', 'D' ]
// 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
console.log(array3.slice(1)) // => [ 'B', 'C', 'D', 'E' ]
// マイナスを指定すると後ろから数えた位置となる
console.log(array3.slice(-1)) // => [ 'E' ]
// 第一引数と第二引数が同じ場合は、空の配列を返す
console.log(array3.slice(1, 1)) // => []
// 第一引数 > 第二引数の場合、常に空配列を返す
console.log(array.slice(4, 1)); // => []