function main(input) {
  const [s, t] = input.split("\n");

  if (s === t) {
    console.log(0);
    return;
  }

  let i = 0;
  while (i < s.length || i < t.length) {
    if (i >= s.length || i >= t.length) {
      break;
    }
    if (s[i] !== t[i]) {
      break;
    }
    i++;
  }

  console.log(i + 1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
