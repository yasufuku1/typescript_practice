console.log("\a\b");
// => a
console.log("a\nb\nc");
// `\n`は改行
// a
// b
// c
// `\`から始まる文字列は自動的にエスケープシーケンスとして扱われる
// 定義されていないエスケープシーケンスは`\`が無視される
console.log("̄\\_(ツ)_/̄");
// => ¯\_(ツ)_/¯
// \_という組み合わせのエスケープシーケンスはないため
// `\`が無視された文字列として評価される
// 文字連結
var str = "JavaScript";
console.log("Hello " + str);
// 特定の書式に文字を埋め込む　`${変数}` バッククォートで囲む
console.log("Hello ".concat(str));
// インデックスを指定してアクセスも可能
console.log(str[0]);
console.log(str[0] + str[1] + str[2] + str[3] + str[4] + str[5] + str[6] + str[7] + str[8] + str[9]);
console.log(str[10]); // => undefined
console.log(str.charAt(0) + str.charAt(1)); // atメソッド
console.log(str.slice(0, 10)); // sliceメソッド
