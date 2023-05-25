import { ethers } from "ethers"
import { address_1337 } from "../../package/1337";
import abi from "../../package/ABIs/WatchNFT.json"
import { wallet } from "./wallet";


export const mint = async (adresses:string[] , quantity:number[] , key : string) => {
    try {

        const watchNFT = new ethers.Contract(address_1337.NFT_addr , abi ,await  wallet(key));
        let tx = await watchNFT.mintNFT(adresses, quantity)
        const receipt = await tx.wait();
        const filter = watchNFT.filters.Transfer(); // Replace 'YourEventName' with the actual event name emitted by your contract

        // Retrieve the events using the event filter
        const events = await watchNFT.queryFilter(filter, receipt.blockNumber, receipt.blockHash);

        let result: any = []
        events.map((item: any) => {
            // console.log("item", item)
            result.push({
                to: item.args[1],
                tokenId: (item.args[2]).toString()
            })
        });
        // console.log('Args:', result);
        return result
    } catch (error) {
        
    }
} 