export function randomlySelect<T>(arr: T[], n: number) {
    if (n <= 0) {
        throw new Error("n must be greater than 0");
    }

    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}