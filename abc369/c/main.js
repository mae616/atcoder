function main(input) {
  const args = input.split("\n");
  const n = Number(args.shift());
  const a = args[0].split(" ").map(Number);

  let result = n;

  const dp = [];
  for (let i = 0; i < n - 1; i++) {
    dp[i] = a[i + 1] - a[i];
  }

  result += dp.length;

  let prevI = 0;
  let prev = dp[0];
  const tmp = [];
  let tempCount = 1;
  let i = 1;
  while (i < dp.length) {
    if (prev === dp[i]) {
      tempCount++;
    } else {
      tmp.push({ pointer: prevI, value: prev, count: tempCount });
      tempCount = 1;
      prevI = i;
      prev = dp[i];
    }
    i++;
  }
  tmp.push({ pointer: prevI, value: prev, count: tempCount });

  for ({ pointer, value, count } of tmp) {
    if (count > 1) {
      result += (function hoge(count) {
        if (count - 1 === 1) {
          return 1;
        } else {
          return count - 1 + hoge(count - 1);
        }
      })(count);
    }
  }

  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
