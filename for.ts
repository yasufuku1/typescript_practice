// 繰り返し(for文)の書き方
// 「number+=1」 => 「number++」と省略可能
for (let number = 1; number <= 10; number ++) {
    console.log(number)
}
const multiple = function() {
    console.log("----------")
    for (let number = 1; number <= 10; number++) {
        if (number % 3 === 0) {
            console.log(`${number}:3の倍数です`)
        } else {
            console.log(number)
        }
    }
}
// 定数multipleに代入された関数を呼び出し
multiple()
