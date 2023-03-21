// 引数のnumが偶数であればtrueを返す
function isEvent(num) {
    return num % 2 === 0;
}
// 引数のnumbersに偶数が含まれていればtrueを返す
function isEventIncluded(numbers) {
    var isEventIncluded = false;
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (isEvent(num)) {
            isEventIncluded = true;
            break; // breakは条件を満たしたら処理を終了してくれる
        }
    }
    return isEventIncluded;
}
var array = [1, 3, 5, 7, 8];
console.log(isEventIncluded(array));
