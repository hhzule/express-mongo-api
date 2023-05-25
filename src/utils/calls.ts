import { ethers } from "ethers"
import { address_1337 } from "../../package/1337";
import abi from "../../package/ABIs/WatchNFT.json"
import { wallet } from "./wallet";


export const mint = async (adresses:[] , quantity:[] , key : string) => {
    try {

        const watchNFT = new ethers.Contract(address_1337.NFT_addr , abi ,await  wallet(key));
        let tx = await watchNFT.mintNFT(adresses, quantity)
        const receipt = await tx.wait();



        const filter = watchNFT.filters.Transfer(); // Replace 'YourEventName' with the actual event name emitted by your contract

        // Retrieve the events using the event filter
        const events = await watchNFT.queryFilter(filter, receipt.blockNumber, receipt.blockNumber);
        let result: any = []
        events.map((item: any, index: any) => {
            result.push({
                to: item.args.to,
                tokenId: (item.args.tokenId).toString()
            })
        });
        console.log('Args:', result);
        return result
    } catch (error) {
        
    }
} 