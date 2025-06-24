var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        this.name = 'Karthik';
    }
    A.prototype.getName = function () {
        return 'Mr. ' + this.name;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var obj1 = new B();
console.log(obj1);
var customers = [
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
var ATM = /** @class */ (function () {
    function ATM(accountNo, pin) {
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
    ATM.prototype.validateDetails = function (accountNo, pin) {
        var _this = this;
        var isValid = false; //by default isValid is false.
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
        customers.forEach(function (customer) {
            if (customer.accountNo === accountNo && customer.pin === pin) {
                _this.accountDetails = customer;
                isValid = true;
            }
        });
        if (!isValid) {
            console.log('Incorrect account no or pin');
        }
        else {
            console.log('Validated customer details successfully', this.accountDetails);
        }
    };
    ATM.prototype.displayCustomerDetails = function () {
        return "\n            Account Details:\n            Customer Name: ".concat(this.accountDetails.name, "\n            Account No: ").concat(this.accountDetails.accountNo, "\n        ");
    };
    ATM.prototype.getBalance = function () {
        console.log('Balance: ', this.accountDetails.balance);
    };
    return ATM;
}());
var EnhancedATM = /** @class */ (function (_super) {
    __extends(EnhancedATM, _super);
    function EnhancedATM(accountNo, pin) {
        // Super keyword immediate parent class constructor.
        return _super.call(this, accountNo, pin) || this;
    }
    EnhancedATM.prototype.getBalance = function () {
        _super.prototype.getBalance.call(this); //whenevre you want to call the parent class method, use super keyword.
        // this.getBalance(); // this will call the current class method.
        console.log('Balance: ₹', this.accountDetails.balance);
    };
    return EnhancedATM;
}(ATM));
var customer1 = new EnhancedATM('9876543210', '4321');
var str = customer1.displayCustomerDetails();
console.log(str);
customer1.getBalance();
var cust2 = new EnhancedATM('6543210987', '6543');
cust2.getBalance();
// Method Overloading:
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.validate = function (identifer1, identifer2) {
        console.log(identifer1, identifer2);
        if (typeof identifer2 === 'string') {
        }
    };
    return Login;
}());
//above validate is a function having different parameters.
// validate method is overloaded with two different signatures.
//same method name with different parameters is called method overloading.
var user1 = new Login();
user1.validate('admin@digitaledify.ai', 'admin!23');
