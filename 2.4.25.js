var RestaurantOrderingSystem = /** @class */ (function () {
    function RestaurantOrderingSystem() {
        this.menu = {
            'Pizza': 300,
            'Burger': 250,
            'Coke': 50,
            'Pasta': 350
        };
        this.bill = 'Bill: \n\n';
    }
    RestaurantOrderingSystem.prototype.displayMenu = function () {
        console.log('Menu: ');
        for (var key in this.menu) {
            console.log("".concat(key, ": \u20B9").concat(this.menu[key]));
        }
    };
    // for in loop is used to iterate over the properties of an object.
    //   this.menu is used to point class variable menu.
    // to differentiate between the class variable and the parameter of the function we use this keyword..
    
    RestaurantOrderingSystem.prototype.takeOrder = function (order) {
        this.order = order;
        this.calculateBill();
    };
    RestaurantOrderingSystem.prototype.calculateBill = function () {
        var amount = 0;
        for (var key in this.order) {
            this.bill += "".concat(key, " (x").concat(this.order[key], "): \u20B9").concat(this.menu[key] * this.order[key], " \n");
            amount += this.menu[key] * this.order[key];
        }
        this.bill += "Total: \u20B9".concat(amount, " \n\nThank you!");
    };
    RestaurantOrderingSystem.prototype.printBill = function () {
        return this.bill;
    };
    return RestaurantOrderingSystem;
}());
var customer1 = new RestaurantOrderingSystem();
customer1.takeOrder({ 'Pizza': 2, 'Coke': 2, 'Burger': 1 });
var bill = customer1.printBill();
console.log(bill);
var customer2 = new RestaurantOrderingSystem();
customer2.takeOrder({ 'Pizza': 5 });
var bill2 = customer2.printBill();
console.log(bill2);
