import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const q = Number(args.shift());

    const cards: string[] = [];
    for (const query of args) {
        const [c, x] = query.split(" ");
        if (c === "1") {
            cards.push(x);
        } else if (c === "2") {
            console.log(cards.pop() ?? 0);
        }
    }
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
