function operation(a, b, c, d) {
	return (a - b) * c + d;
};
function operationY(a, b, c) {
	return (a + b/(c*c))/c-a;
};
function operationF(d, f, e) {
	return d/(f*e/2 + d) - 2*f;
};
var str = 'абвгдеёжзийклмнопрстуф';
numbers = ['03', '07', '08', '09', '10', '11'] 
var res = "";

for (i of numbers){
  res += str[Number(i) + 1];
}
res1 = res.split('').join('-10-');

alert(res1);

var re =  /(\d{3})/;
str_numbers = numbers.join('').split(re).filter(Boolean);
alert(operation(Number(str_numbers[0]),Number(str_numbers[1]),Number(str_numbers[2]),Number(str_numbers[3])))

document.getElementById("task").innerHTML = res;

var a = 1, b = 2, c = 3, e = 4, d = 5, f = 6;
if (window.confirm("Рассчитать задание 3") == true) {
  text = operationY(a,b,c);
} else {
  text = operationF(e,d,f);
}
document.writeln(text);
