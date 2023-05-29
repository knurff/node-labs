function arrayChangeDelete<T>(array: Array<T>, rule: (item: T) => boolean): Array<T> {
    const deleted: T[] = []
    array.forEach((item, index) => rule(item) && array.splice(index, 1) && deleted.push(item))
    return deleted
}
const array = [1, 2, 3, 6, 7, 9]
const deletedElements = arrayChangeDelete(array, (item) => item % 2 == 0)
console.log("array:", array)
console.log("deletedElements: ", deletedElements)
