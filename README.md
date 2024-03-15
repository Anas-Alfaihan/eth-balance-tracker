# Ethereum Balance Tracker

Ethereum Balance Tracker is an npm package that allows you to retrieve the USDT balance of a specific Ethereum address using Web3 and the USDT contract ABI.

## Installation

To install the package, you can use npm:

```bash
npm install ethereum-balance-tracker
```

## Usage

- to get the usdt balance from a specifed address

```js
import { getUsdtBalance } from "ethereum-balance-tracker";

const balance = await getUsdtBalance({
  INFURA_PROJECT_ID: "your_infura_project_id",
  Address: "0xYourEthAddress",
});

console.log(balance);
```

- to get the last block number of Ethereum mainnet.

```js
import { getLastBlockNumber } from "ethereum-balance-tracker";

const result = await getLastBlockNumber({
  INFURA_PROJECT_ID: "your_infura_project_id",
});

console.log(result);
```

## API

### `getUsdtBalance({ INFURA_PROJECT_ID, Address })`

This function retrieves the USDT balance of a specified Ethereum address in wei using the provided Infura Project ID and the address.

#### Parameters

- `INFURA_PROJECT_ID` (string): Your Infura Project ID for connecting to the Ethereum network.
- `Address` (string): The Ethereum address for which you want to retrieve the USDT balance.

#### Returns

- Returns a Promise that resolves to the USDT balance of the specified address in wei.

### `getLastBlockNumber({ INFURA_PROJECT_ID })`

This function retrieves the last block number on the Ethereum mainnet using the provided Infura Project ID.

#### Parameters

- `INFURA_PROJECT_ID` (string): Your Infura Project ID for connecting to the Ethereum network.

#### Returns

- Returns a Promise that resolves to the latest block number on the Ethereum mainnet as a `bigint`.

## Dependencies

This package utilizes the `web3` library to interact with the Ethereum network

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Anas-Alfaihan/eth-balance-tracker/blob/main/LICENSE) file for details.
