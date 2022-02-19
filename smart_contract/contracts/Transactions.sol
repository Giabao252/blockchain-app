//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(address from, address receiver, uint amount, string title, uint256 timestamp, string message);

    struct TransferStructure {
        address sender;
        address receiver;
        uint amount;
        string title;
        uint256 timestamp;
        string message;
    }

    TransferStructure[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory title, string memory message) public {
        transactionCounter += 1;
        transactions.push(TransferStructure(msg.sender, receiver, amount, title, block.timestamp, message)); 
        //block.timestamp : the specific timestamp of that EXCLUSIVE block 
        emit Transfer(msg.sender, receiver, amount, title, block.timestamp, message);

    }

    function getTransactions() public view returns (TransferStructure[] memory) {
        return transactions;
    }
    function getTransactionCounter() public view returns (uint256) {
        return transactionCounter;
    }
}