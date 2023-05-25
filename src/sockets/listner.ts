import  {ethers}   from "ethers";
import { address_1337 } from "../../package/1337";
import abi from "../../package/ABIs/WatchNFT.json"


const listen =()=>{
    const Listen = (chainId:string) =>{
        try {
     //   const provider = new ethers.providers.WebSocketProvider('wss://eth-goerli.alchemyapi.io/v2/GKcZh-E7o6PB3gEz0M9fUHPwG4_xHbbj')

      // Provider
      const node = 'ws://127.0.0.1:8545/'; //chainInfo[chainId].node
      const provider = new ethers.providers.WebSocketProvider(node)
       // const provider   = new ethers.WebSocketProvider(node)
      const contract = new ethers.Contract(address_1337.NFT_addr , abi , provider);

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
