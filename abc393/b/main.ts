import { readFileSync } from "node:fs";

function main(input: string) {
    const s = input.split("\n")[0];

    if (!s.includes("A") || !s.includes("B") || !s.includes("C")) {
        console.log(0);
        return;
    }

    const str = new Map<string, number[]>();
    for (let i = 0; i < s.length; i++) {
        str.set(s[i], [...(str.get(s[i]) || []), i]);
    }

    const b = str.get("B")!;
    const a = str.get("A")!;
    const c = str.get("C")!;
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        const bIndex = b[i];
        // a が b[i] より前にあるかつ c が b[i] より後ろにある かつ ABS(b-a) = ABS(c-b)
        const aIndex = a.filter((a) => a < bIndex);
        const cIndex = c.filter((c) => c > bIndex);
        for (let j = 0; j < aIndex.length; j++) {
            for (let k = 0; k < cIndex.length; k++) {
                if (
                    Math.abs(bIndex - aIndex[j]) ===
                    Math.abs(bIndex - cIndex[k])
                ) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
