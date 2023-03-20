// varは古くから変数宣言で用意られていたキーワード、意図しない動作を生み出すことが懸念されている
var message = 'Hello world';
console.log(message);
var greeting = 'こんにちは、javascript';
console.log(greeting);
var content = "プログラミング、学習中";
console.log(content);
// 再代入可能
content = "javascript、学習中";
console.log(content);
