//
//

// ------------------------------------
// Method 1: if/else chain (manual)
const displayLikes = (arr) => {
  const arrLength = arr.length;

  if (arrLength === 0) {
    return "no one likes this";
  } else if (arrLength === 1) {
    return `${arr[0]} likes this`;
  } else if (arrLength === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arrLength === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`;
  }
};

// ------------------------------------
// Method 2: Ternary chain + slicing

const displayLikes2 = (arr) => {
  const arrLength = arr.length;

  return arrLength === 0
    ? "no one likes this"
    : arrLength === 1
      ? `${arr[0]} likes this`
      : arrLength === 2
        ? `${arr.slice(0, 2).join(" and ")} like this`
        : arrLength === 3
          ? `${arr.slice(0, 2).join(", ")} and ${arr[2]} like this`
          : `${arr.slice(0, 2).join(", ")} and ${arrLength - 2} others like this`;
};

// ------------------------------------
// Method 3: switch
const displayLikes3 = (arr) => {
  const arrLength = arr.length;

  switch (arrLength) {
    case 0:
      return "no one likes this";
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`;
  }
};

const result = displayLikes3(["jack", "alex", "martha", "samantha"]);
console.log(result);
