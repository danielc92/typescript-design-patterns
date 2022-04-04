import { Product } from "./patterns/builder/examples";
import { Birthday } from "./patterns/constructor/examples";
import { createDevice } from "./patterns/factory/examples";

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

const danielsTablet = createDevice("Tablet", {
  cpuCoreCount: 2,
  cpuSpeed: 1300,
  ramCapacity: 4096,
  ramSpeed: 800,
});

const danielsPhone = createDevice("MobilePhone", {
  cpuCoreCount: 6,
  cpuSpeed: 1000,
  ramCapacity: 6080,
  ramSpeed: 1330,
});

console.log(danielsTablet);
console.log(danielsPhone);
