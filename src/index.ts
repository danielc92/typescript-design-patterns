import { Product } from "./patterns/builder/examples";

const keyboard = new Product("Keyboard X83K");

keyboard
  .setExtendedWarranty(true)
  .setWarranty(true)
  .setPrice(45.2)
  .setStores(["Altona", "Melbourne", "Frankston"])
  .setHasSale(true)
  .build();

keyboard.showProduct();
