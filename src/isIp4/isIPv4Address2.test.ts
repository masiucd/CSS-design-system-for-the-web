import * as ip from ".";

let fnOne = (ipAddress: string) => ip.isIPv4Address(ipAddress);

const mockedOne = ip.isIPv4Address as jest.Mock<boolean>;
// const mockedOne = ip.isIPv4Address as jest.Mock<boolean>;

fnOne = jest.fn();

// const mockedFib = fib.sumFibs as jest.Mock<number>;

// fibSumFn = jest.fn();

describe("isIPv4Address2", () => {
  let ip1 = "0.1.1.256";
  let ip2 = "64.00.161.131";
  let ip3 = "172.16.254.1";
  let ip4 = "0.254.255.0";

  test("be defined", () => {
    expect(typeof fnOne).toBe("function");
    expect(fnOne).toBeDefined();
  });

  test("function calls", () => {
    fnOne("");
    expect(fnOne).toHaveBeenCalledWith("");
    expect(fnOne).toHaveBeenCalledTimes(1);
  });

  test("return correct boolean", () => {
    expect(ip.isIPv4Address2(ip3)).toBe(true);
    expect(ip.isIPv4Address2(ip4)).toBeTruthy();

    expect(mockedOne(ip1)).toBeFalsy();
    expect(mockedOne(ip2)).toBeFalsy();
  });
});
