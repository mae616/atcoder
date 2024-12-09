function main(input) {
  const s = input.split("");
  const search = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let result = 0;
  let from = s.indexOf(search[0]);
  for (let i = 1; i < search.length; i++) {
    const to = s.indexOf(search[i]);
    result += Math.abs(from - to);
    from = to;
  }

  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
