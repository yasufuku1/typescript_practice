const languages = {
    ja: "日本語",
    en: "英語",
    tur: "トルコ語",
    chi: "中国"
}
// console.log(languages["ja"])
// console.log(languages.en)
console.log(languages.chi)

// constで定義したオブジェクトは変更可能
languages.chi = "中国語" // オブジェクト(`chi`)の内容を変更する

// 分割代入も可能
const { ja, en, tur, chi } = languages
console.log(ja)
console.log(en)
console.log(tur)
console.log(chi)

// プロパティの存在確認(in演算子を使う)
// if (プロパティ名 in オブジェクト) => true or false
if ("ja" in languages) {
    console.log(`プロパティは存在する`)
} else {
    console.log(`プロパティは存在しない`)
}

// プロパティの存在確認(Object.hasOwnメソッド)
if (languages.hasOwnProperty("jaaa")) {
    console.log(`プロパティを持っている`)
} else {
    console.log(`プロパティを持っていない`)
}

// オブジェクトの列挙(Oblect.Keys()メソッド)
Object.keys(languages).forEach(function(prop) {
// forEachメソッドを組み合わせて反復して処理を行う
    console.log(prop, languages[prop])
})
