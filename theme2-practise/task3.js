/*
Задача 3. Напишіть функцію, яка глибоко клонує об'єкт, переданий їй параметром. */
function deepClone(obj) {
    const clone = {};
    for (let i in obj) {
        clone[i] = typeof (obj[i]) === "object" && obj[i] !== null ? deepClone(obj[i]) : obj[i];
    }
    return clone;
}

const student = {name: 'Ivan', group: 'IA-12', studentBook: {series: 'AB', number: 4562}};
const clone = deepClone(student);
clone.name = 'Petro';
clone.series = 'BC';

console.log(student)
console.log(clone)
