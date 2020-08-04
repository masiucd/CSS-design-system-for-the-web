import { convertHTML } from ".";

let fn = convertHTML;
fn = jest.fn();

describe("convertHtml", () => {
  test("fn1", () => {
    expect(fn).not.toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(0);
    fn("Dolce & Gabbana");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(convertHTML("Dolce & Gabbana")).toStrictEqual("Dolce &amp; Gabbana");
    expect(convertHTML("Schindler's List")).toStrictEqual(
      "Schindler&apos;s List",
    );
    expect(convertHTML("<>")).toStrictEqual("&lt;&gt;");
  });
});
