interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  interface IproductsList {
    addProduct(product: Product): void;
    updateQuantity(productId: number, quantity: number): void;
    removeProduct(productId: number): void;
    calculateTotalAmount(): number;
    displayProducts(): void;
  }
  
  class Cart implements IproductsList {
    private products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products = this.products.filter(p => p.id !== product.id);
      this.products.push(product);
    }
  
    updateQuantity(productId: number, quantity: number): void {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    }
  
    removeProduct(productId: number): void {
      const index = this.products.findIndex(p => p.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  
    calculateTotalAmount(): number {
      return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
    }
  
    displayProducts(): void {
      console.log("Products in cart:");
      this.products.forEach(p => {
        console.log(`${p.name} - ₹${p.price} x ${p.quantity}`);
      });
      console.log(`Total: ₹${this.calculateTotalAmount()}`);
    }
  }
  
  // Creating a cart and adding sample product
  const cartValues = new Cart();
  
  cartValues.addProduct({ 
    id: 1, 
    name: 'laptop', 
    price: 100000, 
    quantity: 2 
  });
  cartValues.addProduct({ 
    id: 2,
     name: 'mouse', 
     price: 300,
      quantity: 1});
  cartValues.addProduct({
     id: 3,
      name: 'cpu', 
      price: 100000,
       quantity: 2 });

  cartValues.displayProducts();
  // calculateTotalAmount():
  