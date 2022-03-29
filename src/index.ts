import { Product } from "./patterns/builder/examples";
import { Birthday } from "./patterns/constructor/examples";

const keyboard = new Product("Keyboard X83K");

keyboard
  .setExtendedWarranty(true)
  .setWarranty(true)
  .setPrice(45.2)
  .setStores(["Altona", "Melbourne", "Frankston"])
  .setHasSale(true)
  .build();

keyboard.showProduct();

const jimsBirthday = new Birthday(
  "Jim Binsley",
  new Date(1980, 2, 24),
  "Chocolate Mud Cake"
);

console.log(jimsBirthday.getCandles());
