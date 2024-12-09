function main(input) {
  const [s, t] = input.split("\n");

  if (s === t) {
    console.log(0);
    return;
  }

  const x = [];
  let temp = s;
  let p = 0;
  loop1: while (p < temp.length) {
    while (temp[p] <= t[p]) {
      p++;
      if (p >= temp.length) {
        break loop1;
      }
    }

    temp = temp.slice(0, p) + t[p] + temp.slice(p + 1);
    x.push(temp);
  }

  p = temp.length - 1;
  loop2: while (p >= 0) {
    while (temp[p] >= t[p]) {
      p--;
      if (p < 0) {
        break loop2;
      }
    }

    temp = temp.slice(0, p) + t[p] + temp.slice(p + 1);
    x.push(temp);
  }

  console.log(x.length);
  x.forEach((item) => {
    console.log(item);
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
