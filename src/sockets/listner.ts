import  {ethers}   from "ethers";
import { address_1337 } from "../../package/1337";
import abi from "../../package/ABIs/WatchNFT.json"
import { provider } from "../utils/provider";
import { createTransactionHandler } from "../controller/transaction.controller";
import { Request, Response } from 'express';


const listen =()=>{
    const Listen =async (chainId:string) =>{
        try {
     
      const contract = new ethers.Contract(address_1337.NFT_addr , abi ,await  provider());

        // Event filter
        // const filter = contract.filters. Transfer('0x0000000000000000000000000000000000000000', null);
        console.log("HERE")
        // Listen to Transfer events
        contract.on('Transfer', async ( from: string, to: string, tokenId: string,event) => {
        console.log('Transfer Event:');
        console.log('Result:', from);
        console.log('HASH:',  event.transactionHash);
        console.log('To:', to);
        console.log('Token ID:', tokenId);
         const body = { tokenId , from, to , hash : event.transactionHash};

         const req: Request = {
            body: body
          } as Request;
          
          const res: Response = {
            status: () => res,
            json: (data:any) => {
              console.log('Transaction created successfully!', data);
              return res;
            }
          } as unknown as Response;
          
            await createTransactionHandler(req, res)
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
