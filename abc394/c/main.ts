import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    let s = args[0].split(""); // 文字列を配列に変換
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "W") {
            count++;
        } else if (s[i] === "A") {
            // これではWAになる
            // s = s.slice(0, i - count) + "A" + "C".repeat(count) + s.slice(i + 1);
            s.splice(i - count, count + 1, "A", ...Array(count).fill("C")); // 配列を直接変更
            count = 0;
        } else {
            count = 0;
        }
    }

    console.log(s.join("")); // 配列を再度文字列に変換
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
