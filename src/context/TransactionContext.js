import React, {useEffect, useState} from "react";
import { ethers } from "ethers";

import {contractABI, contractAddress} from "../utilities/constants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const TransactionProvider =({children}) => {
    //Setting states
    const [CurrentAccount, setCurrentAccount] = useState([]);
    const [formData, setFormData] = useState({address: '', Value: '', title: '', message: ''});
    const [IsLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));


    const handleChange = (event, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: event.target.value}))
    }


    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                return alert("Please connect your MetaMask Wallet!");
            }
            const accounts = await ethereum.request({method: "eth_accounts"});
    
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
    
                //get all the transactions
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object")
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                return alert("PLease install MetaMask")
            };

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object!")
        }
    }
    
    //Important!
    const sendTransaction =  async () => {
        try {
            const { receiver, amount, title, message } = formData;
            const transactionContract  = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: CurrentAccount,
                    to: receiver,
                    gas: '0x5208', //10000gwei
                    //all values in the ETH blockchain are in HEX 
                    value: parsedAmount._hex, //0.00001
                }]
            });

            const transactionID = await transactionContract.addToBlockchain(address, parsedAmount, title, message);
            
            setIsLoading(true);
            console.log(`Loading - ${transactionID.hash}`);

            await transactionID.wait();

            console.log(`Success - ${transactionID.hash}`);
            setIsLoading(false);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
            
        } catch (error) {
            console.log(error) //print out the err in the console
   
            throw new Error("No ethereum object!")
        }
    }

    
    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        //whatever wrapped inside this component will be rendered and get access to the VALUE props
        <TransactionContext.Provider value={{   
            connectWallet, 
            CurrentAccount, 
            formData, 
            setFormData, 
            checkIfWalletIsConnected, 
            handleChange, 
            sendTransaction
        }}> 
            {children}
        </TransactionContext.Provider>
        
    )
}
