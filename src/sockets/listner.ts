import  {ethers}   from "ethers";
import { address_1337 } from "../../package/1337";
import abi from "../../package/ABIs/WatchNFT.json"
import { provider } from "../utils/provider";


const listen =()=>{
    const Listen =async (chainId:string) =>{
        try {
     
      const contract = new ethers.Contract(address_1337.NFT_addr , abi ,await  provider());

        // Event filter
        // const filter = contract.filters. Transfer('0x0000000000000000000000000000000000000000', null);
        console.log("HERE")
        // Listen to Transfer events
        contract.on('Transfer', async ( from: string, minterAddress: string, tokenId: string) => {
        console.log('Transfer Event:');
        console.log('Result:', from);
        // console.log('Result:', result.log.args);
        // let params = result.log.args;
        // from = params[0];
        // minterAddress = params[1];
        // tokenId = params[2];
        // console.log('from:', from);
        console.log('To:', minterAddress);
        console.log('Token ID:', tokenId);
        // const body = { tokenId, minterAddress };
       //     await createNFT({body})
          });

        } catch (error) {
            console.log("localhostListen" , error)
        }
    }

    return{
        Listen
    }


}

const contract_Events = listen()

export {contract_Events}
