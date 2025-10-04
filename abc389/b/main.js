function main(input) {
    const args = input.split("\n");
    const x = Number(args[0]);

    let sum = 1;
    let i = 2;
    while (sum < x) {
        sum *= i++;
    }

    console.log(i - 1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
