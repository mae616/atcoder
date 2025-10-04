function main(input) {
    const args = input.split("\n");
    const [n, m] = args[0].split(" ").map(Number);
    const p = args[1].split(" ").map(Number);

    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    for (let i = 0; i < n; i++) {
        dp[0][i] = p[i];
    }

    console.log(b);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
