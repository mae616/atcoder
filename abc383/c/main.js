function main(input) {
  const args = input.split("\n");
  const [h, w, d] = args.shift().split(" ").map(Number);

  const grids = [];
  for (const arg of args) {
    grids.push(arg.split(""));
  }

  const move = [
    { check: (x, y) => x > 0, x: -1, y: 0 }, // left
    { check: (x, y) => y > 0, x: 0, y: -1 }, // up
    { check: (x, y) => x < w - 1, x: 1, y: 0 }, // right
    { check: (x, y) => y < h - 1, x: 0, y: 1 }, // down
  ];

  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grids[i][j] === "H") {
        (function recursion(cx, cy, c) {
          if (c > d || grids[cy][cx] === "#") {
            return;
          }
          if (grids[cy][cx] === "." || (grids[cy][cx] === "H" && c === 0)) {
            count++;
            grids[cy][cx] = "X";
          }
          for (const m of move) {
            if (m.check(cx, cy)) {
              recursion(cx + m.x, cy + m.y, c + 1);
            }
          }
        })(j, i, 0);
      }
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
