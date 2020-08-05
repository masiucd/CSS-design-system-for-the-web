function spinalCase(str: string) {
  // Create a regular expression for all white spaces and underscores
  let re = /[\s_]/g;

  let re2 = /([a-z])([A-Z])/g;
  // puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
  let s = str.replace(re2, "$1 $2");
  return s.replace(re, "-").toLowerCase();
}

export { spinalCase };
