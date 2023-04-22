/*
Задача 4. Напишіть функцію-обгортку, яка кешуватиме результат будь-якої іншої функції з довільною кількістю числових параметрів. Приклад (псевдокод):
const calc = (a, b, c) => a+b+c;
const wrapper = (args) => {
    // код вашої функції
};
const cachedCalc = wrapper(add);
cachedCalc(2,2,3); // 7 calculated
cachedCalc(5,8,1); // 14 calculated
cachedCalc(2,2,3); // 7 from cache*/

const calc = (a, b, c) => a+b+c;
const wrapper = (func) => {
    const cache = {};
    return (...args) => {
        const cacheKey = JSON.stringify(args);
        if (cache.hasOwnProperty(cacheKey)) {
            return (`${cache[cacheKey]} from cache`);
        }
        const result = func(...args);
        cache[cacheKey] = result;
        return (`${result} calculated`);
    };
};

const cachedCalc = wrapper(calc);
console.log(cachedCalc(2,2,3)); // 7 calculated
console.log(cachedCalc(5,8,1)); // 14 calculated
console.log(cachedCalc(2,2,3)); // 7 from cache