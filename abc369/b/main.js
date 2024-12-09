function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());

  const sum = {
    L: { sum: 0, prev: null },
    R: { sum: 0, prev: null },
  };
  for (let i = 0; i < n; i++) {
    const [a, s] = args[i].split(" ");

    if (sum[s].prev === null) {
      sum[s].prev = Number(a);
    } else {
      sum[s].sum += Math.abs(Number(a) - sum[s].prev);
      sum[s].prev = Number(a);
    }
  }
  console.log(sum["L"].sum + sum["R"].sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
