# Vending Machine Smart Contract

A solidity smart contract that behaves like a vending machine with vending machine items balances for each account, setting prices, buying donuts, restocking donuts and features allowed only to the contract owner.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Ganache](https://www.trufflesuite.com/ganache)

## Get Started

1. Clone the repo

   ```
   git clone
   ```

2. Install truffle (compilation and deployment of smart contracts)

   ```
   npm install -g truffle
   ```

3. Install ganache software and run it on your machine (it will start a local blockchain)

4. Compile the smart contract

   ```
   truffle compile
   ```

5. Deploy the smart contract to the local blockchain (ganache)

   ```
    truffle migrate
   ```

6. Run react app to interact with the smart contract ([src](https://github.com/Umar-Waseem/Vending-Machine-Smart-Contract/tree/main/src) contains the raect code to interact with the smart contract using web3.js)

   ```
   npm install
   npm start
   ```

## Note

The smart contract will be deployed on ganache blockchain which should be running on `localhost:7545`. 

Change it in [`truffle-config.js`](https://github.com/Umar-Waseem/Vending-Machine-Smart-Contract/blob/afa1e3864b8a954d99ef4611abaf1a80e06a0e89/truffle-config.js#L68) if you want a different port.
