## Vending Machine Smart Contract

A solidity smart contract that behaves like a vending machine with vending machine items balances for each account, setting prices, buying donuts, restocking donuts and features allowed only to the contract owner.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Ganache](https://www.trufflesuite.com/ganache)

### Get Started

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

6. Run react app to interact with the smart contract (src contains the raect code to interact with the smart contract using web3.js)

   ```
   npm install
   npm start
   ```

#### The smart contract will be deployed on ganache blockchain which should be running on `localhost:7545`. Change it from `truffle-config.js` if you want a different port.
