// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract VendingMachine {
    // state variables
    address public owner;
    mapping(address => uint) public donutBalances;

    uint256 donutPrice = 2 ether;

    // set the owner as the address that deployed the contract
    // set the initial vending machine balance to 100

    constructor() {
        owner = msg.sender;
        // address(this) give the address of this contract
        donutBalances[address(this)] = 100;
    }

    function getDonutPrice() public view returns (uint) {
        return donutPrice;
    }

    function getVendingMachineBalance() public view returns (uint) {
        return donutBalances[address(this)];
    }

    // Let the owner restock the vending machine
    function restock(uint amount) public {
        require(msg.sender != owner, "Only the owner can restock.");
        donutBalances[address(this)] += amount;
    }

    function setDonutPrice(uint newPrice) public {
        require(msg.sender != owner, "Only the owner can set the price.");
        donutPrice = newPrice * 1 ether;
    }

    // Purchase donuts from the vending machine
    function purchase(uint amount) public payable {
        require(
            msg.value >= amount * donutPrice,
            "You must pay at least 2 ETH per donut"
        );
        require(
            donutBalances[address(this)] >= amount,
            "Not enough donuts in stock to complete this purchase"
        );
        donutBalances[address(this)] -= amount;
        donutBalances[msg.sender] += amount;
    }
}
