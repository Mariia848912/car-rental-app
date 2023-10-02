export const changeRentalConditions = (string) => {
  console.log(string);
  const array = string.replace(/\n/g, " ").split(" ");
  const firstItem = array.slice(0, 3).join(" ");
  const secondItem = array.slice(3, 6).join(" ");
  const thirdItem = array.slice(6).join(" ");
  return [firstItem, secondItem, thirdItem];
};
