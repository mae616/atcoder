import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args[0]);

    const p = args[1].split(" ").map(Number);
    const p2 = [...p];
    p2.sort((a, b) => b - a);

    let rank = 1;
    let prev = 0;
    const rankMap = new Map<number, number>();
    for (const cp2 of p2) {
        if (prev !== cp2) {
            rankMap.set(cp2, rank);
        }
        rank++;
        prev = cp2;
    }

    for (const cp of p) {
        console.log(rankMap.get(cp));
    }
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
