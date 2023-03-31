// 繰り返し(for文)の書き方
// 「number+=1」 => 「number++」と省略可能
for (var number = 1; number <= 10; number++) {
    console.log(number);
}
var multiple = function () {
    console.log("----------");
    for (var number = 1; number <= 10; number++) {
        if (number % 3 === 0) {
            console.log("".concat(number, ":3\u306E\u500D\u6570\u3067\u3059"));
        }
        else {
            console.log(number);
        }
    }
};
// 定数multipleに代入された関数を呼び出し
multiple();
