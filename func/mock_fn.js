const checkDiscount = (name) => {
  if (name === 'milk') {
    return true;
  }
  return false;
};

const calculateThePrice = (goods, checkDiscount) => {
  let totalPrice = 0;
  goods.forEach((item) => {
    // 先計算原價
    let price = Number(item.price) * Number(item.count);

    // 如果有折扣要半價
    if (checkDiscount(item.name)) {
      price *= 0.5;
    }

    // 將價格加到總合上
    totalPrice += price;
  });
  return totalPrice;
};
