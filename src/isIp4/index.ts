function isIPv4Address(inputString: string) {
  let isValid = inputString
    .split(".")
    .map(Number)
    .some((n) => n > 255);

  if (isValid) return false;

  let re = /^\d{3}.\d{2}.\d{3}.\d{1}/g;

  return inputString.match(re)?.join("") === inputString;
}

const isIPv4Address2 = (input: string) =>
  !!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    input,
  );

// console.log(isIPv4Address("172.16.254.1")); // true
// console.log(isIPv4Address("172.316.254.1")); // false
// console.log(isIPv4Address(".254.255.0")); // false
// console.log(isIPv4Address("172.16.254.1"));

export { isIPv4Address, isIPv4Address2 };
