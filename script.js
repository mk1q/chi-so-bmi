let height = +prompt("Nhập chiều cao vào đây");
let weight = +prompt("Nhập cân nặng vào đây");
let bmi = weight / (height * height);
let a;
if (bmi <= 16) {
  a=" Gầy độ III";
} else if (bmi < 17) {
  a="Gầy độ II";
} else if (bmi < 18.5) {
  a="Gầy độ I";
} else if ( bmi < 25) {
  a="Bình thường";
} else if ( bmi < 30) {
  a="Thừa cân";
} else if (bmi < 35) {
  a="Béo phì độ I";
} else if ( bmi < 40) {
  a="Béo phì độ II";
} else {
  a="Béo phì độ III";
}

document.getElementById("chiso").innerHTML = bmi;
document.getElementById("do gay").innerHTML =a ;

