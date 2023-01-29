/*3. Создайте класс `Калькулятор`, который будет содержать 4 **статических** метода - *Сложение*, *Умножение*, *Вычитание* и *Деление*. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.*/
let result = document.getElementById("result");
class Calculator {
    static plus(x, y) {
        return (x + y);
    }
    static minus(x, y) {
        return (x - y);
    }
    static multiply(x, y) {
        return (x * y);
    }
    static divide(x, y) {
        return (x / y);
    }
}
function calcSum() {
    result.textContent = Calculator.plus(Number(document.getElementById("first-number").value), Number(document.getElementById("second-number").value));
    console.log(result);
}
function calcSub() {
    result.textContent = Calculator.minus(Number(document.getElementById("first-number").value), Number(document.getElementById("second-number").value));
    console.log(result);
}
function caclMul() {
    result.textContent = Calculator.divide(Number(document.getElementById("first-number").value), Number(document.getElementById("second-number").value));
    if (Number(document.getElementById("second-number").value) == 0) {
        alert('На ноль делить нельзя!');
    }
    console.log(result);
}
function calcInc() {
    result.textContent = Calculator.multiply(Number(document.getElementById("first-number").value), Number(document.getElementById("second-number").value));
    console.log(result);
}