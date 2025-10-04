function main(input) {
    const args = input.split("\n");
    const q = Number(args.shift());

    let prev = 0;
    let flg = true;
    let minus = 0;
    const snake = [];
    for (let i = 0; i < q; i++) {
        let query, num;
        if (args[i] === "2") {
            query = 2;
        } else {
            [query, num] = args[i].split(" ").map(Number);
        }

        if (query === 1) {
            snake.push({
                p: prev,
                len: num,
            });
            prev = num + prev;
        } else if (query === 2) {
            const top = snake.shift();
            minus += top.len;
        } else if (query === 3) {
            console.log(snake[num - 1].p - minus);
            flg = false;
        }
    }
    if (flg) {
        console.log("");
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
