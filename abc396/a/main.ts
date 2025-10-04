import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args[0]);
    const a = args[1].split(" ").map(Number);

    const ans = () => {
        const sw = [0, ...a.slice(0, 2)];
        for (let i = 2; i < n; i++) {
            sw.shift();
            sw.push(a[i]);
            if (sw.every((v) => v === sw[0])) {
                return true;
            }
        }
        return false;
    };

    console.log(ans() ? `Yes` : `No`);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
