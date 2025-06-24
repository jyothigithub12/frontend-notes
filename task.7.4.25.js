var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products = this.products.filter(function (p) { return p.id !== product.id; });
        this.products.push(product);
    };
    Cart.prototype.updateQuantity = function (productId, quantity) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (product) {
            product.quantity = quantity;
        }
    };
    Cart.prototype.removeProduct = function (productId) {
        var index = this.products.findIndex(function (p) { return p.id === productId; });
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    Cart.prototype.calculateTotalAmount = function () {
        return this.products.reduce(function (total, p) { return total + p.price * p.quantity; }, 0);
    };
    Cart.prototype.displayProducts = function () {
        console.log("Products in cart:");
        this.products.forEach(function (p) {
            console.log("".concat(p.name, " - \u20B9").concat(p.price, " x ").concat(p.quantity));
        });
        console.log("Total: \u20B9".concat(this.calculateTotalAmount()));
    };
    return Cart;
}());
// Creating a cart and adding sample product
var cartValues = new Cart();
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
    quantity: 1
});
cartValues.addProduct({
    id: 3,
    name: 'cpu',
    price: 100000,
    quantity: 2
});
cartValues.displayProducts();
calculateTotalAmount();
