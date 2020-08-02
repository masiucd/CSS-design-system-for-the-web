function alternatingSums(a: number[]): number[] {
  let team1: number[] = [];
  let team2: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1.push(a[i]);
    } else {
      team2.push(a[i]);
    }
  }
  return [team1.reduce((a, b) => a + b, 0), team2.reduce((a, b) => a + b, 0)];
}
function alternatingSums2(a: number[]): number[] {
  let t1 = a.map((num, i) => (i % 2 === 0 ? num : 0)).filter((x) => !!x);
  let t2 = a.map((num, i) => (i % 2 !== 0 ? num : 0)).filter((x) => !!x);

  return [t1.reduce((a, b) => a + b, 0), t2.reduce((a, b) => a + b, 0)];
}

export { alternatingSums, alternatingSums2 };
