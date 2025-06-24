// Cart class
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    // Add a product to the cart
    Cart.prototype.addProduct = function (product) {
        var existing = this.products.find(function (p) { return p.id === product.id; });
        if (existing) {
            existing.quantity += product.quantity;
        }
        else {
            this.products.push(product);
        }
        console.log("".concat(product.name, " added to cart."));
    };
    // Update quantity of a specific product
    Cart.prototype.updateQuantity = function (productId, quantity) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (product) {
            product.quantity = quantity;
            console.log("Quantity for ".concat(product.name, " updated to ").concat(quantity, "."));
        }
        else {
            console.log("Product not found in cart.");
        }
    };
    // Remove a product from the cart
    Cart.prototype.removeProduct = function (productId) {
        var index = this.products.findIndex(function (p) { return p.id === productId; });
        if (index !== -1) {
            var removed = this.products.splice(index, 1)[0];
            console.log("".concat(removed.name, " removed from cart."));
        }
        else {
            console.log("Product not found in cart.");
        }
    };
    // Calculate total amount
    Cart.prototype.calculateTotalAmount = function () {
        return this.products.reduce(function (total, product) {
            return total + product.price * product.quantity;
        }, 0);
    };
    // Display all products in the cart
    Cart.prototype.displayProducts = function () {
        if (this.products.length === 0) {
            console.log("Cart is empty.");
            return;
        }
        console.log("Products in cart:");
        this.products.forEach(function (product) {
            console.log("- ".concat(product.name, " | Price: $").concat(product.price, " | Quantity: ").concat(product.quantity));
        });
        console.log("Total Amount: $".concat(this.calculateTotalAmount().toFixed(2)));
    };
    return Cart;
}());
// Example usage
var cart = new Cart();
cart.addProduct({ id: 1, name: "Laptop", price: 999.99, quantity: 1 });
cart.addProduct({ id: 2, name: "Mouse", price: 49.99, quantity: 2 });
cart.updateQuantity(2, 3);
cart.removeProduct(1);
cart.displayProducts();
