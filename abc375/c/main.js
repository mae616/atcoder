function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  let a = [];
  for (let i = 0; i < n; i++) {
    const hoge = args[i].split("");
    hoge.unshift("d");
    a.push(hoge);
  }
  a.unshift(new Array(n).fill("d"));
  const a_dash = structuredClone(a);

  for (let i = 1; i <= n / 2; i++) {
    for (let x = i; x <= n + 1 - i; x++) {
      for (let y = i; y <= n + 1 - i; y++) {
        a_dash[y][n + 1 - x] = a[x][y];
      }
    }
    a = structuredClone(a_dash);
  }

  a_dash.shift();
  a_dash.forEach((item) => {
    item.shift();
    console.log(item.join(""));
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
