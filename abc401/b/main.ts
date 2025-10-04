import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const n = Number(args.shift());

    let count = 0;
    let isLogin = false;
    for (const a of args) {
        if (a === "login") isLogin = true;
        if (a === "logout") isLogin = false;
        if (a === "private" && !isLogin) count++;
    }

    console.log(count);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
