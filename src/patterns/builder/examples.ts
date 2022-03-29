class Product {
  name: string;
  stores: string[];
  hasWarranty: boolean;
  hasExtendedWarranty: boolean;
  hasSale: boolean;
  price?: number;

  constructor(name: string) {
    this.name = name;
    this.hasWarranty = false;
    this.hasExtendedWarranty = false;
    this.hasSale = false;
    this.stores = [];
  }

  setPrice(price: number) {
    this.price = price;
    return this; // allows chaining methods
  }

  setWarranty(hasWarranty: boolean) {
    this.hasWarranty = hasWarranty;
    return this; // allows chaining methods
  }

  setExtendedWarranty(hasExtendedWarranty: boolean) {
    this.hasExtendedWarranty = hasExtendedWarranty;
    return this; // allows chaining methods
  }

  setHasSale(hasSale: boolean) {
    this.hasSale = hasSale;
    return this; // allows chaining methods
  }

  setStores(stores: string[]) {
    this.stores = stores;
    return this;
  }

  showProduct() {
    console.log("Product: ", this);
  }

  build() {
    return this;
  }
}

export { Product };
