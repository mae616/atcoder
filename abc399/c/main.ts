import { readFileSync } from "node:fs";

function main(input: string) {
    const args = input.split("\n");
    const [n, m] = args.shift()!.split(" ").map(Number);

    const graph = new Map<number, number[]>();
    for (const line of args) {
        const [a, b] = line.split(" ").map(Number);
        if (graph.has(a)) {
            graph.get(a)!.push(b);
        } else {
            graph.set(a, [b]);
        }
    }

    console.log(graph);

    let deleted = 0;
    const exists = new Set<string>();
    for (let i = 1; i <= n; i++) {
        if (graph.has(i)) {
            for (const j of graph.get(i)!) {
                if (exists.has(`${i}-${j}`)) {
                    continue;
                }
                exists.add(`${i}-${j}`);

                const isClose = (target: number, start: number) => {
                    if (graph.has(target)) {
                        if (target === start) {
                            return true;
                        }
                        for (const k of graph.get(target)!) {
                            if (exists.has(`${target}-${k}`)) {
                                return true;
                            }
                            if (isClose(k, start)) {
                                return true;
                            }
                        }
                    }
                    return false;
                };

                if (isClose(j, i)) {
                    deleted++;
                }
            }
        }
    }

    console.log(deleted);
}

main(readFileSync("/dev/stdin", "utf8").trimEnd());
