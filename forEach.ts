// 配列にforEachメソッドというfor文と同じように反復処理を行うメソッドがある
// .forEach(コールバック関数);

const array = [1, 2, 3, 4, 5];

array.forEach(currentValue => { //仮引数currentValue
    console.log(currentValue);
});

function sum(numbers) {
    let total = 0;
    numbers.forEach(num => { //仮引数num
        total += num;
    });
    return total;
}

console.log(sum([2, 4, 6, 8])); //配列の合計