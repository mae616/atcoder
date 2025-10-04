import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    let s = args[0];

    let count = 0;
    let odd = true;
    for (let i = 0; i < s.length; i++) {
        const match = odd ? "i" : "o";
        if (s[i] !== match) {
            s = s.slice(0, i) + match + s.slice(i);
            count++;
        }
        odd = !odd;
    }

    if (s[s.length - 1] !== "o") {
        s = s + "o";
        count++;
    }
    console.log(count);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
