import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args[0]);
    const s = args[1].split("");

    let left = s.indexOf("1");
    let right = s.lastIndexOf("1");
    const half = Math.floor((right - left) / 2);
    console.log(n, s, left, right);

    let count = 0;
    while (s.slice(left, right).includes("0")) {
        let targetLeft = s.lastIndexOf("1", left + half);
        let targetRight = s.indexOf("1", right - half);
        if (targetLeft === -1 || targetRight === -1) break;
        for (let i = targetLeft; i < right; i++) {
            console.log(s[i], s[i + 1]);
            const temp = s[i];
            s.splice(i, 1);
            s.splice(i + 1, 0, temp);
            count++;
        }

        for (let i = targetRight; i > left; i--) {
            console.log(s[i - 1], s[i]);
            const temp = s[i];
            s.splice(i, 1);
            s.splice(i - 1, 0, temp);
            count++;
        }

        left = s.indexOf("1");
        right = s.lastIndexOf("1");
    }
    console.log(s);
    console.log(count);
    // let count = 0;
    // while (s.slice(left, right).includes("0")) {
    //     let zero = s.slice(left, right).indexOf("0");
    //     if (zero === -1) break;
    //     if (zero - left <= right - zero) {
    //         for (let i = zero; i > left; i--) {
    //             [s[i], s[i - 1]] = [s[i - 1], s[i]];
    //             console.log(s);
    //             count++;
    //         }
    //     } else {
    //         for (let i = zero; i < right; i++) {
    //             [s[i], s[i + 1]] = [s[i + 1], s[i]];
    //             console.log(s);
    //             count++;
    //         }
    //     }
    //     left = s.indexOf("1");
    //     right = s.lastIndexOf("1");
    // }
    // console.log(count);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
