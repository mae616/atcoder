import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [n, k] = args[0].split(" ").map(Number);

    const MOD = 1_000_000_000;

    if (k > n) {
        console.log(1);
        return;
    }

    let dp: number[] = Array(k).fill(1);
    let sum = dp.reduce((a, b) => (a + b) % MOD, 0);
    let current = 0;

    for (let i = k; i <= n; i++) {
        current = sum;
        dp.push(current);
        sum = (sum + current - dp[i - k]) % MOD;
        if (sum < 0) sum += MOD;
    }

    console.log(dp[n]);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
