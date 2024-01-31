export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};

export const dateTime = () => {
  var today = new Date();
  var date =
    today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();
  // today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return date;
};
