import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const a = Number(args[0]);
    const [b, c] = args[1].split(" ").map(Number);
    const s = args[2];

    console.log(`${a + b + c} ${s}`);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
