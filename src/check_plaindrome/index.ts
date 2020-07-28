function checkPalindrome(inputString: string): boolean {
  return inputString.split("").reverse().join("") === inputString;
}

export { checkPalindrome };
