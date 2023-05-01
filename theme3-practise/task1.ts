/*Задача 1. Напишіть функцію add(), яка приймає будь-яку кількість параметрів у такому вигляді:
    console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37*/

function add(num: number): Function {
    let sum: number = num;
    function innerAdd(nextNum: number): number | Function {
        if (nextNum !== undefined) {
            sum += nextNum;
            return innerAdd;
        }
        return sum;
    }
    return function next(): number | Function {
        return arguments.length === 0 ? sum : innerAdd(arguments[0]);
    };
}
console.log(add(2)(5)(7)(1)(6)(5)(11)())