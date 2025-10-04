function main(input) {
    const args = input.split("\n");
    const q = Number(args.shift());
    const queries = args.map((arg) => arg.split(" ").map(Number));

    let prev = 0;
    let flg = true;
    let minus = 0;
    let minusI = -1;
    const snake = [];
    for (let i = 0; i < q; i++) {
        if (queries[i][0] === 1) {
            snake.push({
                p: prev,
                len: queries[i][1],
            });
            prev += queries[i][1];
        } else if (queries[i][0] === 2) {
            minus += snake[++minusI].len;
        } else if (queries[i][0] === 3) {
            if (minusI === -1) {
                console.log(snake[queries[i][1] - 1].p);
            } else {
                console.log(snake[queries[i][1] + minusI].p - minus);
            }
            flg = false;
        }
    }
    if (flg) {
        console.log("");
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
