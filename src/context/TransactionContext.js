import React, {useEffect, useState} from "react";
import { ethers } from "ethers";

import {contractABI, contractAddress} from "../utilities/constants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider, 
        signer,
        transactionContract
    })
}

export const TransactionProvider =({children}) => {
    //Setting states
    const [CurrentAccount, setCurrentAccount] = useState([]);
    const [formData, setFormData] = useState({address: '', Value: '', title: '', message: ''});

    const checkIfWalletIsConnected = async ({children}) => {
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

    const checkWallet = async () => {
        if (!ethereum) {
            return alert("Please connect to your MetaMask wallet");
        }
        const accounts = await ethereum.request({method: 'eth_accounts'});

        console.log(accounts);    
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

    const sendTransaction =  async () => {
        try {
            
            if (!ethereum) {
                return alert("PLease install MetaMask")
            };
        } catch (error) {
            console.log(error) //print out the err in the console

            throw new Error("No ethereum object!")
        }
    }

    
    useEffect(() => {
        checkWallet();
    }, []);

    return (
        //whatever wrapped inside this component will be rendered and get access to the VALUE props
        <TransactionContext.Provider value={{connectWallet, CurrentAccount, formData, setFormData, checkIfWalletIsConnected}}> 
            {children}
        </TransactionContext.Provider>
        
    )
}
