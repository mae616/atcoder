import { readFileSync } from "node:fs";

function main(input: string) {
    const [n, s, t] = input.split("\n");

    let count = 0;
    for (let i = 0; i < Number(n); i++) {
        if (s[i] !== t[i]) {
            count++;
        }
    }

    console.log(count);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
