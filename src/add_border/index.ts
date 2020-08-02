// add length of letters + 2 (*)

function addBorder(picture: string[]) {
  const generateStars = (amount: number) => {
    return "*".repeat(amount);
  };

  let res = [];
  let len = 0;
  for (let i = 0; i < picture.length; i++) {
    len = picture[i].length;
    res.push(`*${picture[i]}*`);
  }

  res.push(generateStars(len + 2));
  res.unshift(generateStars(len + 2));
  return res;
}

function addBorder2(picture: string[]) {
  let [a] = picture;
  let wall = a.length + 2;

  return ["*".repeat(wall), ...picture.map((x) => `*${x}*`), "*".repeat(wall)];
}

export { addBorder, addBorder2 };
