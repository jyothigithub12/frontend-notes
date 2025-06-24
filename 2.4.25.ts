
class RestaurantOrderingSystem {
    menu: object = {
        'Pizza': 300,
        'Burger': 250,
        'Coke': 50,
        'Pasta': 350
    };
    order: object;
    bill: string = 'Bill: \n\n';
    constructor() {

    }

    displayMenu(): void {
        console.log('Menu: ')
        for (let key in this.menu) {
            console.log(`${key}: ₹${this.menu[key]}`)
        }
    }
    
    
    // for in loop is used to iterate over the properties of an object.
   //   this.menu is used to point class variable menu.
  // to differentiate between the class variable and the parameter of the function we use this keyword..

    takeOrder(order: object): void {
        this.order = order;
        this.calculateBill();
    }

    calculateBill(): void {
        let amount = 0;
        for (let key in this.order) {
            this.bill += `${key} (x${this.order[key]}): ₹${this.menu[key] * this.order[key]} \n`;
            amount +=  this.menu[key] * this.order[key];
        }

        this.bill += `Total: ₹${amount} \n\nThank you!`
    }

    printBill() {
        return this.bill;
    }
}

const customer1 = new RestaurantOrderingSystem();

customer1.takeOrder({ 'Pizza': 2, 'Coke': 2, 'Burger': 1 });

const bill = customer1.printBill();

console.log(bill);

const customer2 = new RestaurantOrderingSystem();

customer2.takeOrder({ 'Pizza': 5 });

const bill2 = customer2.printBill();

console.log(bill2);

