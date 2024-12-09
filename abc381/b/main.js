function main(input) {
  const args = input.split("\n");
  const s = args[0];

  const n = s.length;

  if (n % 2 !== 0) {
    console.log("No");
    return;
  }

  const set = new Set();
  for (let i = 0; i < n; i += 2) {
    if (set.has(s[i])) {
      console.log("No");
      return;
    }
    if (s[i] !== s[i + 1]) {
      console.log("No");
      return;
    }
    set.add(s[i]);
  }

  console.log("Yes");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
