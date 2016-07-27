// Write a constructor to model a bank account. Bank accounts belong to an accountHolder, has an accountType and a balance. The accountHolder should be a String holding the customers name, the accountType should be a String as well, the balance should be a Number. None of these fields should be modifiable by an outside entity, instead each should be accessed via setters and getters.
//
// Additionally, make a method called purchase which allows a user to make a purchase and subtract it from their balance. Once you have this working, add additional logic so that a balance cannot go negative and instead the code emits a message like "you can't do that" using console.log.

var BankAccount = function(accountHolder, accountType, balance) {
  this.accountHolder = accountHolder;
  this.accountType =  accountType;
  this.balance = Number(balance);
  that = this;

  return {
    getBalance: function() { return that.balance;} ,
    setBalance: function(num) {that.balance = num;},
    purchase: function(num) {
      if (that.balance - num < 0) {
        console.log("You don't have enough money in your account to take that much.");
      }
      else {
        that.balance -= num;
      }
    }
  };
};



var newAccount = new BankAccount("Suzie", "savings", "1.25"); // new account with $1.25 balance
newAccount.balance = 5000;
console.log(newAccount.getBalance()); // 1.25

newAccount.setBalance(100);
console.log(newAccount.getBalance()); // 100

// same with name and accountType

newAccount.purchase(10);
console.log(newAccount.getBalance()); // 90


newAccount.purchase(200);
console.log(newAccount.getBalance()); // you can't do that
