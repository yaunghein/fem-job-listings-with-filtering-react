//removing falsy and duplicate items
export const pureDropdownTexts = arr => {
  let newArr = [];
  for (let item of arr) {
    if (item && !newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};
