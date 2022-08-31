// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言"\

// const val3 = "const変数"
// console.log(val3);

// //const変数は上書き負荷
// val3 = "const変数は上書き不可能"
// console.log(val2);

// const val3 = "const変数は再宣言不可能"
// console.log(val3);

// const val4 = {
//     name: "じゃけえ",
//     age: 28,
// };

//オブジェクトの場合はconstでも上書き可能
// val4.name = "jak";
// val4.address = "Hiroshima"
// console.log(val4);

//配列の場合はconstでも上書き可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'snake';
// val5.push('monkey');
// console.log(val5);

//テンプレート文字列
// const name = "じゃけぇ";
// const age = 28;

//「私の名前はじゃけぇです。年齢は２８歳です。」

// 従来の方法
// const mesasge1 = "私の名前は" + name + "です。年齢は" + age + "歳です。"
// console.log(mesasge1);

// テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数

// 従来の関数
// function func1(e) {
//     return e;
// }

//アロー関数 ()やreturnを省略可能
// const func2 = (str) => str;
// return str;
// console.log(func2('func2です'));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//     name: "じゃけぇ",
//     age: 28,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

// 配列の場合の分割代入
// const myProfile = ['じゃけぇ', 28];
// const [name, age] = myProfile;
// const message3 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message3);

// デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("あり");

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2, ];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2)  => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //これらのコピー方法は参照渡しになり、お互いの配列が同じ値になってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// mapやfilterを使った配列の処理
//for文を使用する場合
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// };

// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// console.log(nameArr2);

// 単純な処理であればこの表記方法で実装可能
// nameArr.map((name, index) => console.log(`${index}番目は、${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//     if (name === "じゃけぇ"){
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// });

// console.log(newNameArr);

// 三項演算子
// 条件 ? 条件がtrueの場合の処理 : 条件がfalseの場合の処理
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 130000000;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
// }

// console.log(checkSum(100,2));

// 論理演算子の本当の意味を知ろう && ||
const flag1 = true;
const flag2 = true;

// if (flag1 || flag2) {
//     console.log('1か2はtrueです');
// }

// if (flag1 && flag2) {
//     console.log('1も2もtrueです');
// }

// ||パイプラインは左側がfalseなら右側を返す
// const num = 1;
// const fee = num || "金額未設定です";
// console.log(fee);


//&&は左側がtrueの場合に右側を返す
const num2 = null;
const fee2 = num2 && "なにか設定されました"
console.log(fee2);