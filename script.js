const score = [98, 85, 91, 78, 78, 87, 96, 72];
const [top1, top2, top3, ...otherscore] = score;
console.log(top1);
console.log(top2);
console.log(top3);
console.log(otherscore);
//////
//////
//////
//////
const user1 = { username: "JaneDoe", language: "Spanish" };
const user2 = {};

function getWelcomeMessage(user) {
  const username = user.username || "Guest";
  const language = user.language || "English";

  return `Hello ${username}! Welcome to our site in ${language}.`;
}
console.log(getWelcomeMessage(user1));
console.log(getWelcomeMessage(user2));
//////
//////
//////
//////
const products = [
  { name: "Book", price: 20 },
  { name: "Pen", price: null },
  { name: "Notebook", price: undefined },
  { name: "Backpack" },
];
products.forEach((product) => {
  const price = product.price ?? 50;
  console.log(`Product: ${product.name}, Price: ${price}`);
});
//////
//////
//////
//////
const cartItems = [
  { name: "Shoes", quantity: 2, price: 75 },
  { name: "Hat", price: 20 },
  { name: "Socks", quantity: 3 },
];

cartItems.forEach((item) => {
  const { name, quantity = 1, price = 10 } = item;
  const totalCost = quantity * price;
  console.log(
    `Item: ${name}, Quantity: ${quantity}, Price: ${price}, Total Cost: ${totalCost}`
  );
});
//////
//////
//////
//////
