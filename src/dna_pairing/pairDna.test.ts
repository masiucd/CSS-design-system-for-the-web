import * as dna from ".";

// let gcgPair = dna.pairElement('GCG')
let dnaPair = (str: string) => dna.pairElement(str);

const mocked = dna.pairElement as jest.Mock<string[][]>;

dnaPair = jest.fn();

describe("DNA pair", () => {
  test("calls", () => {
    expect(dnaPair).toHaveBeenCalledTimes(0);

    dnaPair("GCG");

    expect(dnaPair).toHaveBeenCalledWith("GCG");
    expect(dnaPair).toHaveBeenCalledTimes(1);

    dnaPair("GCG");
    dnaPair("TTGAG");
    expect(dnaPair).toHaveBeenCalledTimes(3);
    expect(dnaPair).toHaveBeenCalledWith("TTGAG");
  });

  test("correct output", () => {
    expect(mocked("GCG")).toStrictEqual([
      ["G", "C"],
      ["C", "G"],
      ["G", "C"],
    ]);

    expect(mocked("TTGAG")).toStrictEqual([
      ["T", "A"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
});
