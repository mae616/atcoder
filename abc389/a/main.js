function main(input) {
    const args = input.split("\n");
    const [a, _, b] = args[0].split("");

    console.log(Number(a) * Number(b));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
