import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [N, M] = args[0].split(" ").map(Number);
    const B = args[1].split(" ").map(Number);
    const W = args[2].split(" ").map(Number);

    // ボールを降順にソート
    B.sort((a, b) => b - a);
    W.sort((a, b) => b - a);

    // 黒色ボールの部分和 番兵で0を入れる
    const blackSum: number[] = new Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        blackSum[i] = blackSum[i - 1] + B[i - 1];
    }

    // 白色ボールの部分和
    const whiteSum: number[] = new Array(M + 1).fill(0);
    for (let i = 1; i <= M; i++) {
        whiteSum[i] = Math.max(whiteSum[i - 1], whiteSum[i - 1] + W[i - 1]);
    }

    // 黒色ボールをi個選ぶときの最大の総和
    let maxSum = 0;
    for (let i = 1; i <= N; i++) {
        maxSum = Math.max(maxSum, blackSum[i] + whiteSum[Math.min(i, M)]);
    }

    console.log(maxSum);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
