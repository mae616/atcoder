import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [s1, s2] = args[0].split(" ");

    if (s1 === "sick" && s2 === "sick") {
        console.log("1");
    } else if (s1 === "sick" && s2 === "fine") {
        console.log("2");
    } else if (s1 === "fine" && s2 === "sick") {
        console.log("3");
    } else if (s1 === "fine" && s2 === "fine") {
        console.log("4");
    }
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
