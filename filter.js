// numberが偶数であればtrueを返す
function isEvent(num) {
    return num % 2 === 0;
}
function filterEvent(numbers) {
    var results = [];
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (!isEvent(num)) {
            continue; // tureでなければ反復処理が終了し、これ以降の行の処理が実行されない
        }
        // 偶数を`result`に追加
        results.push(num);
    }
    return results;
}
var array = [1, 3, 5, 6, 8];
console.log(filterEvent(array));
// filterメソッドで`true`が返ってきたのみだけ新しい配列で返す
var array2 = [1, 3, 4, 5, 10];
console.log(array2.filter(isEvent));
