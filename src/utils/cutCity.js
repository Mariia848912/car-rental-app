export const cutCity = (string) => {
  const array = string.split(" ");
  return array[array.length - 2].slice(0, -1);
};
