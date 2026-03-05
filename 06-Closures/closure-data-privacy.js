function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log("Deposited: ", amount);
            console.log("Current balance: ", balance);
        },
        withdraw: function(amount) {
            if(amount > balance){
                console.log("Insufficient balance");
                return;
            }
            balance -= amount;
            console.log("Withdrawn: ", amount);
            console.log("Current Balance: ", balance);
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(20);


