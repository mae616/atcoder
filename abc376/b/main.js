function main(input) {
  const args = input.split("\n");
  const [n, q] = args.shift().split(" ").map(Number);

  let count = 0;
  const hands = { L: 1, R: 2 };
  for (let i = 0; i < q; i++) {
    const [h, t] = args[i].split(" ");

    let h2;
    if (h === "L") {
      h2 = hands["R"];
    } else {
      h2 = hands["L"];
    }

    let temp;
    if (h2 >= hands[h] && h2 <= Number(t)) {
      temp = n - (Number(t) - hands[h]);
    } else if (h2 <= hands[h] && h2 >= Number(t)) {
      temp = n - hands[h] + Number(t);
    } else {
      temp = Math.abs(hands[h] - Number(t));
    }
    count += temp;
    hands[h] = Number(t);
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
