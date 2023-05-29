import { ethers } from "ethers";


export const provider = async () =>{
    const node = 'ws://127.0.0.1:8545/'; //chainInfo[chainId].node
   // const node = 'wss://polygon-mumbai.g.alchemy.com/v2/siaBFefLktVP7d_O75mGmJhUXGwxjB4e'; //chainInfo[chainId].node
    const provider = new ethers.providers.WebSocketProvider(node)
    return provider
}