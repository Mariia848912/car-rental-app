export const changePrice = (string) => {
  const value = string.slice(1);
  return `${value}$`;
};
