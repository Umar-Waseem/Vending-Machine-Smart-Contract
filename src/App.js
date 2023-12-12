import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import vendingmachine from './VendingMachine.json';

const contractAddress = '0x67aEbDdFfe58629408f8440F0E6d849492b64212';


const App = () => {
  const [balance, setBalance] = useState(0);
  const [restockAmount, setRestockAmount] = useState(0);
  const ContractABI = vendingmachine.abi;
  const [account, setAccount] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const web3 = new Web3('http://localhost:7545');
        const vendingMachineContract = new web3.eth.Contract(
          ContractABI,
          contractAddress
        );
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[4]);
        const balance = await vendingMachineContract.methods
          .getVendingMachineBalance()
          .call();
        setBalance(balance);
        console.log('Vending Machine Balance:', balance);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [balance, ContractABI, restockAmount]);

  const donutRestocking = async () => {
    try {
      const web3 = new Web3('http://localhost:7545');
      const vendingMachineContract = new web3.eth.Contract(
        ContractABI,
        contractAddress
      );

      // Assume the account initiating the restock is the first account in the wallet
      const accounts = await web3.eth.getAccounts();
      const owner = accounts[4];

      console.log('Restocking vending machine...');
      console.log('Owner Account:', owner);

      // Call the restock function with the specified amount
      await vendingMachineContract.methods
        .restock(parseInt(restockAmount, 10)).send({ from: owner });

      console.log('Vending Machine Restocked!');

      // Refresh the balance after restocking
      const updatedBalance = await vendingMachineContract.methods
        .getVendingMachineBalance()
        .call();
      setBalance(updatedBalance);

      console.log('Vending Machine Balance after Restock:', updatedBalance);
    } catch (error) {
      console.log('Error restocking vending machine:', error);
    }
  };

  return (
    <div>
      <h1>Smart Contract Invoke Example</h1>
      <h2>Account address: {account}</h2>
      <p>Vending Machine Donut Balance: {balance.toString()} donuts</p>
      <label>
        Restock Amount:
        <input
          type="number"
          value={restockAmount}
          onChange={(e) => setRestockAmount(e.target.value)}
        />
      </label>
      <button onClick={donutRestocking}>Restock</button>
    </div>
  );
};

export default App;
