// in từ 1 đến 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
//lặp qua mảng
let fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
//if
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}
//switch
let day = 3;
switch (day) {
  case 1:
    console.log("CN");
    break;
  case 2:
    console.log("T2");
    break;
  case 3:
    console.log("T3");
    break;
  case 4:
    console.log("T4");
    break;
  case 5:
    console.log("T5");
    break;
  case 6:
    console.log("T6");
    break;
  case 7:
    console.log("T7");
    break;
}
//do...while
let ii = 1;
do {
  console.log(ii);
  ii++;
} while (ii <= 5);
//break
for (let y = 1; y <= 10; y++) {
  if (y === 5) {
    break;
  }
  console.log(y);
}
//continue
for (let x = 1; x <= 10; x++) {
  if (x % 2 === 0) {
    continue; //bỏ qua số chẵn
  }
  console.log(x);
}