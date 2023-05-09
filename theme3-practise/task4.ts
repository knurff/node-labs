/*
Задача 4. Напишіть функцію-обгортку, яка кешуватиме результат будь-якої іншої функції з довільною кількістю числових параметрів. Приклад (псевдокод):
const calc = (a, b, c) => a+b+c;
const wrapper = (args) => {
    // код вашої функції
};
 */

const wrapper = (func: Function) => {
    let cache = {}
    return function (...args: unknown[]) {
        if (cache.hasOwnProperty(args.toString())) {
            type ObjectKey = keyof typeof cache
            let cacheElement = cache[args.toString() as ObjectKey];
            console.log(cacheElement + ' from cache')
            return cacheElement
        }
        let nonCache = func.apply(cache, args)
        Object.defineProperty(cache, args.toString(), {
            value: nonCache
        })
        console.log(nonCache + ' calculated')
        return nonCache
    }
};

const calc = (a: number, b: number, c: number) => a + b + c;
const cachedCalc = wrapper(calc);
console.log(cachedCalc(2, 2, 3)); // 7 calculated
console.log(cachedCalc(5, 8, 1)); // 14 calculated
console.log(cachedCalc(2,2,3)); // 7 from cache