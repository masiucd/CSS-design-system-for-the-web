import { alternatingSums, alternatingSums2 } from ".";

let mocked = jest.fn(alternatingSums);
let mocked2 = jest.fn(alternatingSums2);
describe("alternatingSums", () => {
  let xs1 = [50, 60, 60, 45, 70];
  test("alternatingSums1 ", () => {
    expect(alternatingSums).toBeDefined();
    expect(alternatingSums).not.toBeUndefined();
    expect(alternatingSums(xs1)).toStrictEqual([180, 105]);
    expect(alternatingSums(xs1)).not.toStrictEqual([120, 105]);

    expect(mocked).not.toHaveBeenCalledTimes(3);
    mocked(xs1);
    mocked(xs1);
    mocked(xs1);

    expect(mocked).toHaveBeenCalled();
    expect(mocked).toHaveBeenCalledTimes(3);
  });
  test("alternatingSums2 ", () => {
    expect(alternatingSums2).toBeDefined();
    expect(alternatingSums2).not.toBeUndefined();
    expect(alternatingSums2(xs1)).toStrictEqual([180, 105]);
    expect(alternatingSums2(xs1)).not.toStrictEqual([120, 105]);

    expect(mocked2).not.toHaveBeenCalledTimes(3);
    mocked2(xs1);
    mocked2(xs1);
    mocked2(xs1);

    expect(mocked2).toHaveBeenCalled();
    expect(mocked2).toHaveBeenCalledTimes(3);
  });
});
