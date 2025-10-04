function main(input) {
    const args = input.split("\n");
    const r = Number(args[0]);

    const move = [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
        { x: 0, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
        { x: 1, y: -1 },
    ];
    const set = new Set();
    let count = 0;

    (function dfs(x, y) {
        if (set.has(`${x},${y}`)) {
            return;
        }
        set.add(`${x},${y}`);
        if (
            Math.sqrt((x + 0.5) ** 2 + (y + 0.5) ** 2) > r ||
            Math.sqrt((x - 0.5) ** 2 + (y + 0.5) ** 2) > r ||
            Math.sqrt((x + 0.5) ** 2 + (y - 0.5) ** 2) > r ||
            Math.sqrt((x - 0.5) ** 2 + (y - 0.5) ** 2) > r
        ) {
            return;
        }
        count++;
        for (const { x: dx, y: dy } of move) {
            dfs(x + dx, y + dy);
        }
    })(0, 0);
    console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
