function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  const k = args[0].split(" ").map(Number);

  k.sort((a, b) => a - b);
  const sum = k.reduce((a, b) => a + b);
  const limit = sum / 2;
  let min = 99999999999;

  (function recursion(index, a, b) {
    if (index >= n) {
      const temp = Math.max(a, b);
      if (temp >= limit) min = Math.min(min, temp);
      return;
    }
    recursion(index + 1, a + k[index], b);
    recursion(index + 1, a, b + k[index]);
  })(0, 0, 0);

  console.log(min);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
