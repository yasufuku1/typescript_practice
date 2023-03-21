// 配列にforEachメソッドというfor文と同じように反復処理を行うメソッドがある
// .forEach(コールバック関数);
var array = [1, 2, 3, 4, 5];
array.forEach(function (currentValue) {
    console.log(currentValue);
});
function sum(numbers) {
    var total = 0;
    numbers.forEach(function (num) {
        total += num;
    });
    return total;
}
console.log(sum([2, 4, 6, 8])); //配列の合計
