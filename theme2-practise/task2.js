/*
Задача 2. Напишіть функцію, яка бере два рядки і повертає true, якщо вони є анаграмами одне одного. */
function isAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    a = a.toLowerCase().split('').sort();
    b = b.toLowerCase().split('').sort();
    return a.every((val, index) => val === b[index]);
}

console.log(isAnagram('123', '312'));
console.log(isAnagram('123', '412'));