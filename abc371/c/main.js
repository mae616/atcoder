function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  const mg = Number(args.shift());

  const uv = [];
  for (let i = 0; i < mg; i++) {
    const [a, b] = args.shift().split(" ").map(Number);
    uv.push({ a: a, b: b });
  }

  const mh = Number(args.shift());
  const ab = [];
  for (let i = 0; i < mh; i++) {
    const [ta, tb] = args.shift().split(" ").map(Number);
    ab.push({ a: ta, b: tb });
  }

  if (mh === 0 && mg === 0) {
    console.log(0);
    return;
  }

  const aa = [];
  aa[0] = [0];
  for (let i = 1; i <= n - 1; i++) {
    aa[i] = [0];
    for (let j = 1; j <= i + 1; j++) {
      if (j < i + 1) {
        aa[i].push(0);
      } else {
        aa[i] = aa[i].concat(args.shift().split(" ").map(Number));
        break;
      }
    }
  }

  for (let i = 0; i < ab.length; i++) {
    ab[i].const = aa[ab[i].a][ab[i].b];
  }

  console.log(n);

  console.log(mg);
  console.log(uv);
  console.log(mh);
  console.log(ab);
  console.table(aa);

  // console.log(b);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
