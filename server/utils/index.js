import fs from "fs";

export const readDessertsData = () => {
  const dessertsPath = "./db/data.json";
  const dessertsData = JSON.parse(fs.readFileSync(dessertsPath, "utf-8"));
  return dessertsData;
};

export const storeOrder = (order) => {
  const id = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000);
  order.id = id;
  const orderPath = "./db/orders.json";
  const orders = JSON.parse(fs.readFileSync(orderPath, "utf-8"));
  orders.push(order);
  fs.writeFileSync(orderPath, JSON.stringify(orders, null, 2));
  return order;
};
