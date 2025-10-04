import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [n, m] = args.shift()!.split(" ").map(Number);

    const set = new Set<string>();
    for (let i = 0; i < m; i++) {
        const [u, v] = args[i].split(" ").map(Number);
        if (u === v) continue;
        set.add([u, v].sort().join(":"));
    }
    console.log(m - set.size);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
