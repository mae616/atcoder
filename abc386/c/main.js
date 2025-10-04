function main(input) {
    const [k, tS, tT] = input.split("\n");

    if (tS === tT) {
        console.log("Yes");
        return;
    }

    const s = tS.split("");
    const t = tT.split("");
    const cS = [...s];
    const cT = [...t];

    const a = Math.min(s.length, t.length);
    for (let i = 0; i < a; i++) {
        if (s[i] !== t[i]) {
            cS.splice(i, 1);
            cT.splice(i, 1);
            const case1 = cS.join("") === t.join("");
            const case2 = cT.join("") === s.join("");
            const case3 = cT.join("") === cS.join("");
            case1 || case2 || case3 ? console.log("Yes") : console.log("No");
            return;
        }
    }
    if (Math.abs(s.length - t.length) === 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
