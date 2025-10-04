import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const s = Number(args[0]);

    console.log(200 <= s && s <= 299 ? "Success" : "Failure");
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
