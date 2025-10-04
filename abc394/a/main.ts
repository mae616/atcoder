import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const s = args[0];

    console.log(s.replace(/[^2]+/g, ""));
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
