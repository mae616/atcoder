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

  const already = new Set();
  const kasitu = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grids[i][j] === ".") {
        const tempGrids = JSON.parse(JSON.stringify(grids));
        let count = 0;
        const index = kasitu.push(new Set());
        const current = kasitu[index - 1];
        (function recursion(tempGrids, cx, cy, mx, my) {
          if (already.has(`${cx},${cy}`)) {
            return;
          }
          already.add(`${cx},${cy}`);

          if (Math.abs(cy - my) + Math.abs(cx - mx) <= d) {
            if (tempGrids[cy][cx] === ".") {
              count++;
              tempGrids[cy][cx] = "X";
              current.add(`${cx},${cy}`);
            }
            for (const m of move) {
              if (m.check(cx, cy)) {
                recursion(tempGrids, cx + m.x, cy + m.y, mx, my);
              }
            }
          }
        })(tempGrids, j, i, j, i);

        already.clear();
      }
    }
  }

  let max = 0;
  for (let i = 0; i < kasitu.length - 1; i++) {
    for (let j = i + 1; j < kasitu.length; j++) {
      const temp = structuredClone(kasitu[i]);
      for (const k of kasitu[j]) {
        temp.add(k);
      }
      max = Math.max(max, temp.size);
    }
  }
  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
