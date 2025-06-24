class A {
    name: String = 'Karthik';
    getName() {
        return 'Mr. ' + this.name;
    }
}

class B extends A {
   
}

const obj1 = new B();

console.log(obj1);

interface Customer {
    accountNo: string;
    pin: string;
    name: string;
    balance: number;
}

const customers: Array<Customer> = [
    {
        accountNo: "9876543210",
        pin: "4321",
        name: "Rajesh Kumar",
        balance: 25000
    },
    {
        accountNo: "8765432109",
        pin: "8765",
        name: "Priya Sharma",
        balance: 32000
    },
    {
        accountNo: "7654321098",
        pin: "2109",
        name: "Amit Patel",
        balance: 15000
    },
    {
        accountNo: "6543210987",
        pin: "6543",
        name: "Neha Verma",
        balance: 28000
    },
    {
        accountNo: "5432109876",
        pin: "0987",
        name: "Vikram Singh",
        balance: 40000
    }
];

class ATM {
    accountDetails: Customer; // accountDetails is a property of ATM class which will hold the customer details in the form of object.
    // accountDetails is of type Customer which is an interface.

    constructor(accountNo: string, pin: string) {
        this.validateDetails(accountNo, pin);
    }

    // while creation of object of ATM class, constructor will be called and it will call validateDetails method.
    // validateDetails method will check if the accountNo and pin are valid or not.
    // if valid, it will set the accountDetails property with the customer object.
    // if not valid, it will log the message 'Incorrect account no or pin' and set the accountDetails property to undefined.
    // constructor will be called only once while creating the object of ATM class.
    // validateDetails method will be called only once while creating the object of ATM class.
    // validateDetails method will not be called again.
    // validateDetails method will be called only once while creating the object of ATM class.



    validateDetails(accountNo: string, pin: string) {
        let isValid = false;   //by default isValid is false.
        // ES 5
        // for (let i = 0; i < customers.length; i++) {
        //     if (customers[i].accountNo === accountNo && customers[i].pin === pin) {
        //         this.accountDetails = customers[i];
        //         isValid = true;
        //     }
        // }
        // ES6

        // arrayName.forEach(callbackFunc);
        // forEach method will iterate over the array and call the callback function for each element of the array.

        customers.forEach((customer) => {
            if (customer.accountNo === accountNo && customer.pin === pin) {
                this.accountDetails = customer;
                isValid = true;
            }
        });
        if (!isValid) {
            console.log('Incorrect account no or pin');
        } else {
            console.log('Validated customer details successfully', this.accountDetails);
        }
    }

    displayCustomerDetails(): string {
        return `
            Account Details:
            Customer Name: ${this.accountDetails.name}
            Account No: ${this.accountDetails.accountNo}
        `
    }

    getBalance(): void {
        console.log('Balance: ', this.accountDetails.balance);
    }
}

class EnhancedATM extends ATM {
    constructor(accountNo: string, pin: string) {

        // Super keyword immediate parent class constructor.
        super(accountNo, pin);
    }

    getBalance(): void {
        super.getBalance(); //whenevre you want to call the parent class method, use super keyword.
        // this.getBalance(); // this will call the current class method.
        console.log('Balance: ₹', this.accountDetails.balance);
    }
}

const customer1 = new EnhancedATM('9876543210', '4321');

const str = customer1.displayCustomerDetails();

console.log(str);

customer1.getBalance();

const cust2 = new EnhancedATM('6543210987', '6543');

cust2.getBalance();

// Method Overloading:

class Login {

    // email & password

    // mobile & otp

    validate(email: string, password: string): void

    validate(mobile: string, otp: number): void //void keyword is used to indicate that the function does not return any value.


    validate(identifer1: any, identifer2: any) {
        console.log(identifer1, identifer2);

        if (typeof identifer2 === 'string') {
            
        }
    }

}

//above validate is a function having different parameters.

// validate method is overloaded with two different signatures.

//same method name with different parameters is called method overloading.

const user1 = new Login();

user1.validate('admin@digitaledify.ai', 'admin!23');
