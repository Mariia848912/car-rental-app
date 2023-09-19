export const changeType = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");
};
