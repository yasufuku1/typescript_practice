function isEvent(num) {
    return num % 2 === 0;
}
var array = [1, 3, 4, 5];
/* someメソッド
    配列の要素を先頭から順にチェックし、
    一度でも条件を満たす要素が見つかった場合、
    以降の要素のチェックを中止し、`true`を返す*/
console.log(array.some(isEvent)); // true
/* 配列の要素を全てチェックし、
   満たせていなかった場合、
   someメソッドによって`false`が返される*/
var array2 = [1, 3, 5, 7, 9];
console.log(array2.some(isEvent)); //false
