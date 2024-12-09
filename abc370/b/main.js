function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const a = args.map((item) => {
    const a = item.split(" ").map(Number);
    a.unshift(0);
    return a;
  });

  let prev = 1;
  for (let i = 1; i <= n; i++) {
    const current = i;
    if (prev >= current) {
      prev = a[prev][current];
    } else {
      prev = a[current][prev];
    }
  }

  console.log(prev);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
