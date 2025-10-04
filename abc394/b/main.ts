import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args.shift());

    const result = new Array(50).fill("");
    for (const str of args) {
        result[str.length - 1] = str;
    }

    console.log(result.join(""));
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
