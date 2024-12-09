function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const a = args[1].split(" ").map(Number);

  if (n === 1) {
    console.log(0);
    return;
  }

  const ary = [];
  for (let i = 0; i < n - 1; i++) {
    if (a[i] === a[i + 1]) {
      ary.push({ key: a[i], index: i });
    }
  }

  const kouho = [];
  let temp = [ary[0]];
  let prev = ary[0];
  for (let i = 1; i < ary.length; i++) {
    if (prev.index + 2 === ary[i].index) {
      temp.push(ary[i]);
    } else {
      kouho.push([...temp]);
      temp = [ary[i]];
    }
    prev = ary[i];
  }

  let max = 0;

  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
