import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const x = Number(args[0]);

    if (x >= 38) {
        console.log(1);
    } else if (x >= 37.5) {
        console.log(2);
    } else {
        console.log(3);
    }
}
main(readFileSync("/dev/stdin", "utf8").trimEnd());
