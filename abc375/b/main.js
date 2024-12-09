function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());

  let result = 0;
  let [a, b] = [0, 0];
  for (let i = 0; i < n; i++) {
    const [c, d] = args[i].split(" ").map(Number);
    result += Math.sqrt((a - c) ** 2 + (b - d) ** 2);
    [a, b] = [c, d];
  }
  const [c, d] = [0, 0];
  result += Math.sqrt((a - c) ** 2 + (b - d) ** 2);

  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
