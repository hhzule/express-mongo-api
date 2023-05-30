import { ethers } from "ethers"
import { address_1337 } from "../../package/1337";
import { address_80001 } from "../../package/80001";
import abi from "../../package/ABIs/WatchNFT.json"
import { wallet } from "./wallet";


export const mint = async (adresses:string[] , quantity:number[] , key : string) => {
    try {
console.log("minting..")
        const watchNFT = new ethers.Contract(address_80001.NFT_addr , abi ,await  wallet(key));
        let tx = await watchNFT.mintNFT(adresses, quantity)
        const receipt = await tx.wait();
      //  console.log("minting..done receipt.blockNumber", receipt.blockNumber)
       
        const filter = watchNFT.filters.Transfer(); // Replace 'YourEventName' with the actual event name emitted by your contract
     
        // Retrieve the events using the event filter
        const events = await watchNFT.queryFilter(filter, receipt.blockNumber, receipt.blockNumber);
     
        let result: any = []

        // for (let index = 0; index < events.length; index++) {
        //     console.log("item", item)
        //     result.push({
        //         to: events[index].?args[1],
        //         tokenId: (item.args[2]).toString()
        //     })
            
        // }
        events.map((item: any) => {
            console.log("item", item)
            result.push({
                to: item?.args[1],
                tokenId: (item?.args[2]).toString()
            })
        });
    
        return result
    } catch (error) {
        console.log("minting failed")
    }
} 