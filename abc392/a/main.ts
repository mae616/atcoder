import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [a1, a2, a3] = args[0].split(" ").map(Number);

    if (a1 * a2 === a3 || a1 * a3 === a2 || a2 * a3 === a1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
