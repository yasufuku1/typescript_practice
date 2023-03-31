var n = parseInt(Math.random() * 5) + 1;
console.log(n);
switch (n) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
    // どのcaseにも当てはまらなかった場合
    default:
        console.log("凶です");
        break;
}
