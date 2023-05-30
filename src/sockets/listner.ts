import  {ethers}   from "ethers";
// import { address_1337 } from "../../package/1337";
import { address_80001 } from "../../package/80001";
import abi from "../../package/ABIs/WatchNFT.json"
import { provider } from "../utils/provider";
import TransactionHandler  from "../controller/transaction.controller";
import { Request, Response } from 'express';


const listen =()=>{
    const Listen =async (chainId:string) =>{
        try {
     
      const contract = new ethers.Contract(address_80001.NFT_addr , abi ,await  provider());

        // Event filter
        const filterMint = contract.filters.Transfer('0x0000000000000000000000000000000000000000', null);
      //  const filterTransfer = contract.filters.Transfer(!null, !null);
        console.log("HERE")
        // Listen to Transfer events
        contract.on(filterMint, async ( from: string, to: string, tokenId: string,event) => {
            if (from ===  '0x0000000000000000000000000000000000000000') {
              console.log("HEREaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
         const body = { tokenId , from, to , hash : event.transactionHash};

         const req: Request = {
            body: body
          } as Request;
          
          const res: Response = {
            status: () => res,
            json: (data:any) => {
         //     console.log('Transaction created successfully first !', data);
              return res;
            }
          } as unknown as Response;
          
           let response =  await TransactionHandler.createTransactionHandler(req, res)
         //   console.log('Transaction obj !', response);
          }
          });



          contract.on('Transfer', async ( from: string, to: string, tokenId: string,event) => {
            if (from !=  '0x0000000000000000000000000000000000000000') {
              console.log("HEREaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavvvvvvvvvvvvvvvvvvvvvvvaaaaaaaaaaaa")
                console.log('Transfer Event:');

                // console.log('Result:', from);
                // console.log('HASH:',  event.transactionHash);
                // console.log('To:', to);
                // console.log('Token ID:', tokenId);
                 const body = { tokenId , from, to , hash : event.transactionHash};
        
                 const req: Request = {
                    body: body
                  } as Request;
                  
                  const res: Response = {
                    status: () => res,
                    json: (data:any) => {
                      console.log('Transaction created successfully! second', data);
                      return res;
                    }
                  } as unknown as Response;
                 const result =  await TransactionHandler.appendTransactionHandler(req, res)
                 console.log("result of append", result)
            }
               
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
