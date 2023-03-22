const obj = {
// Key:value
    "a":1,
    "b":2,
    "c":3
}
/* `for..in`を使ってobjの各プロパティをkeyに代入し、
    反復処理を行う
    pbjの値をvalueに代入し、表示させる*/
for (const key in obj) {
    const value = obj[key]
    console.log(`key:${key}, value${value}`)
}

const obj2 = {
    "fruit":"リンゴ",
    "animal":"猫",
    "country":"日本"
}
console.log(obj2)
/* for...inループはオブジェクトのプロトタイプチェーンも列挙するため、
   列挙すべきではないプロパティが含まれる場合がある*/
for (const key in obj2) {
    // objにプロパティがあれば
    if (obj2.hasOwnProperty(key)) {
        const value = obj2[key]
        console.log(`key:${key}, value:${value}`)
    }
}