function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());

  const [t, v] = args[0].split(" ").map(Number);
  let sum = v;
  let prev = t;

  if (n === 1) {
    console.log(sum);
    return;
  }

  for (let i = 1; i < n; i++) {
    const [t, v] = args[i].split(" ").map(Number);
    sum = Math.max(0, sum - (t - prev)) + v;
    prev = t;
  }
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
