function main(input) {
    const args = input.trim().split("\n");
    const [n, _] = args.shift().split(" ").map(Number);

    const cols = args.map((arg) => {
        const [x, y, color] = arg.split(" ");
        return {
            x: Number(x),
            y: Number(y),
            c: color,
        };
    });

    cols.sort((current, next) => {
        // x昇順, y昇順, Wを先に にソート
        if (current.x === next.x) {
            if (current.c === "B" && next.c === "W") {
                return 1; // Bを後に
            }
            return current.y - next.y; // 昇順
        }
        return current.x - next.x; // 昇順
    });

    let prevY = n + 1;
    for (const col of cols) {
        if (col.c === "W") {
            prevY = Math.min(prevY, col.y);
        } else {
            // color === "B"
            if (prevY <= col.y) {
                console.log("No");
                return;
            }
        }
    }
    console.log("Yes");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
