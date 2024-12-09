function main(input) {
  const args = input.split("\n");
  const [n, m] = args[0].split(" ").map(Number);

  const x = args[1].split(" ").map(Number);
  const a = args[2].split(" ").map(Number);

  const hit = [];
  for (let i = 0; i < m; i++) {
    hit.push({ key: x[i], stone: a[i] });
  }
  hit.push({ key: n + 1, stone: 0 }); // 番兵

  hit.sort((a, b) => a.key - b.key);

  let count = 0;
  let prevKey = 0;
  let currentStone = 1;
  for (let i = 0; i < hit.length; i++) {
    const L = hit[i].key - prevKey;
    const carry = currentStone - L;

    // 当てはめる
    if (L > 0) {
      count += ((L - 1) * L) / 2;
    }

    if (carry < 0) {
      console.log(-1);
      return;
    }

    // 繰り越し
    count += L * carry;

    prevKey = hit[i].key;
    currentStone = carry + hit[i].stone;
  }

  if (currentStone !== 0) {
    console.log(-1);
  } else {
    console.log(count);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
