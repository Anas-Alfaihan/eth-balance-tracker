import Web3 from "web3";
import { LastBlock } from "../types";

export function getLastBlockNumber({
  INFURA_PROJECT_ID,
}: LastBlock): Promise<bigint> {
  const web3 = new Web3(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);

  return web3.eth.getBlockNumber();
}
