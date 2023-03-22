var languages = {
    ja: "日本語",
    en: "英語",
    tur: "トルコ語",
    chi: "中国"
};
// console.log(languages["ja"])
// console.log(languages.en)
console.log(languages.chi);
// constで定義したオブジェクトは変更可能
languages.chi = "中国語"; // オブジェクト(`chi`)の内容を変更する
// 分割代入も可能
var ja = languages.ja, en = languages.en, tur = languages.tur, chi = languages.chi;
console.log(ja);
console.log(en);
console.log(tur);
console.log(chi);
// プロパティの存在確認(in演算子を使う)
// if (プロパティ名 in オブジェクト) => true or false
if ("ja" in languages) {
    console.log("\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u5B58\u5728\u3059\u308B");
}
else {
    console.log("\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u5B58\u5728\u3057\u306A\u3044");
}
// プロパティの存在確認(Object.hasOwnメソッド)
if (languages.hasOwnProperty("jaaa")) {
    console.log("\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3063\u3066\u3044\u308B");
}
else {
    console.log("\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3063\u3066\u3044\u306A\u3044");
}
// オブジェクトの列挙(Oblect.Keys()メソッド)
Object.keys(languages).forEach(function (prop) {
    // forEachメソッドを組み合わせて反復して処理を行う
    console.log(prop, languages[prop]);
});
