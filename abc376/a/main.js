function main(input) {
  const args = input.split("\n");
  const [n, c] = args.shift().split(" ").map(Number);
  const t = args[0].split(" ").map(Number);

  if (n === 1) {
    console.log(1);
    return;
  }

  let prev = t[0];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (c <= t[i] - prev) {
      count++;
      prev = t[i];
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
