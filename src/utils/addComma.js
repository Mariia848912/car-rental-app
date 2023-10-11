export const addComma = (number) => {
  if (typeof number !== number) {
    const changeNumber = Number.parseFloat(number);

    if (Number.isNaN(changeNumber)) return "";

    return changeNumber.toLocaleString("en-IN");
  }
  return number.toLocaleString("en-IN");
};
