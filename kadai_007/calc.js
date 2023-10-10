//変数numに0～100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100);

//変数numの値を出力する
console.log(num);

//変数(num)が3の倍数の場合 “3の倍数です”
if(num % 3 === 0){
  console.log('3の倍数です');
}
//変数(num)が5の倍数の場合 “5の倍数です”
if(num % 5 === 0){
  console.log('5の倍数です');
}
//変数(num)が3と5の倍数の場合 “３と5の倍数です”
if(num % 15 === 0){
  console.log('3と5の倍数です');
}
//それ以外の時は変数(num)を出力する
else if(num % 15 === 0){
  console.log(num);
}
