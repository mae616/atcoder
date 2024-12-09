function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  const a = args[0].split(" ").map(Number);

  let exp = 0;

  let count = 1;
  for (let i = 0; i < n; i++) {
    let current = a[i];
    const next = i + 1;
    if (count % 2 === 0) {
      if (next < n) {
        if (a[i] < a[next]) {
          continue;
        }
      }
      current += a[i];
    }
    exp += current;
    count++;
  }

  console.log(exp);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
