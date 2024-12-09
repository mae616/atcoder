function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  const omocha = args.shift().split(" ").map(Number);
  const hako = args[0].split(" ").map(Number);

  omocha.sort((a, b) => a - b);
  hako.sort((a, b) => a - b);

  for (let i = n - 1; i >= 0; i--) {
    if (omocha[i] <= hako[hako.length - 1]) {
      hako.pop();
      omocha.splice(i, 1);
    }
    if (hako.length === 0) {
      break;
    }
  }

  if (omocha.length === 1 && hako.length === 0) {
    console.log(omocha[0]);
  } else {
    console.log(-1);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
