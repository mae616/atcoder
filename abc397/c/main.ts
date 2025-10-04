import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args[0]);
    const a = args[1].split(" ").map(Number);

    const sumLen = new Array(n).fill(0);
    const ascSet = new Set<number>();
    const descSet = new Set<number>();
    for (let i = 0; i < n; i++) {
        ascSet.add(a[i]);
        descSet.add(a[n - i - 1]);
        sumLen[i] += ascSet.size;
        sumLen[n - i - 2] += descSet.size;
    }

    console.log(Math.max(...sumLen));
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
