import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [n, l] = args[0].split(" ").map(Number);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
