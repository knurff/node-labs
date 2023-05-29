async function runSequent<T, R> (array: Array<T>, callback: (item: T, index: number) => Promise<R>): Promise<R[]> {
    return await Promise.all(array.map(async (item, index) => callback(item, index)))
}
const array: Array<number> = [1, 2, 3];
const main = async () => {
    const results = await runSequent(array, async (item, index) => {
        await new Promise((resolve) => setTimeout(resolve, index * 1000))
        console.log(`${index} item has been processed`)
        return {item, index}
    });

    console.log(results)
};

main();
