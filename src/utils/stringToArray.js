export const stringToArray = (string, delimiter) => {
  console.log(delimiter);
  console.log(string.split(`${delimiter}`));
  return string.split(`${delimiter}`);
};
