/*
Задача 2. Напишіть функцію, яка бере два рядки і повертає true, якщо вони є анаграмами одне одного. */

function isAnagram(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }
    let aChars = a.toLowerCase().split('').sort();
    let bChars = b.toLowerCase().split('').sort();
    return aChars.every((val: string, index: number) => val === bChars[index]);
}

console.log(isAnagram('123', '312'));
console.log(isAnagram('123', '412'));