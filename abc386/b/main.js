function main(input) {
    const args = input.split("\n");
    const s = args[0].split("");

    let count = 0;
    let double = false;
    for (const c of s) {
        if (double && c === "0") {
            count++;
            double = false;
        } else if (!double && c === "0") {
            double = true;
        } else if (double && c !== "0") {
            count += 2;
            double = false;
        } else {
            // !double && c !== "0"
            count++;
        }
    }
    if (double) {
        count++;
    }

    console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
