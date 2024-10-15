"use strict";

function BankAccount (value) {
    let balance = value;
    this.deposit = function (dep){
        balance = balance + dep;
        console.log(`Your new balance is ${balance} since you deposited ${dep}`);
    };
    this.withdraw = function (withdr){
        if (withdr <= balance) {
            balance = balance - withdr;
            console.log(`Your new balance is ${balance} since you withdraw ${withdr}`);
        } else {
            console.log(`Not enough money on your balance account. Work HARDER!!!!!`)
        }
    }
    this.getBalance = function () {
        return balance;
    }
}

let account1 = new BankAccount(1000);
account1.withdraw(1000);
account1.getBalance();
account1.deposit(50);
account1.getBalance();

