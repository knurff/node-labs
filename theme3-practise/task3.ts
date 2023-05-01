/*
Задача 3. Напишіть функцію, яка глибоко клонує об'єкт, переданий їй параметром. */

function deepClone<Type>(obj: Type): Type {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item)) as Type;
    }

    const clone = {} as Type;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            clone[key] = deepClone(value);
        }
    }

    return clone;
}

let student = {
    name: 'Ivan',
    group: 'IA-12',
    studentBook: {
        series: 'AB',
        number: 4562
    }
}

let clone = deepClone(student)
console.log(clone === student)
student.studentBook.number = 123
console.log(student)
console.log(clone)
