function convertHTML(str: string) {
  // & = &amp;
  // > = &gt;
  // < = &lt;
  // "" = &quot;&quot;
  // ' = &apos;

  let regex = /(&|>|<|"|')/g;

  let htmlChar = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      // console.log("found it at index of ", i);
      htmlChar = str[i];
      if (htmlChar === "&") {
        str = str.replace(htmlChar, "&amp;");
      }
      if (htmlChar === ">") {
        str = str.replace(htmlChar, "&gt;");
      }
      if (htmlChar === "<") {
        str = str.replace(htmlChar, "&lt;");
      }
      if (htmlChar === '"') {
        str = str.replace(htmlChar, "&quot;");
      }
      if (htmlChar === "'") {
        str = str.replace(htmlChar, "&apos;");
      }
    }
  }

  return str;
}

// let sen = "Dolce & Gabbana";
// sen = "Hamburgers < Pizza < Tacos";
// sen = 'Stuff in "quotation marks"';

// sen = "abc";

export { convertHTML };
