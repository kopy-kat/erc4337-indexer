import { createConfig } from "@ponder/core";
import { http } from "viem";
import { EntryPointAbi } from "./abis/EntryPointAbi";

export default createConfig({
  networks: {
    // ethereum: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
    // optimism: { chainId: 10, transport: http(process.env.PONDER_RPC_URL_10) },
    polygon: { chainId: 137, transport: http(process.env.PONDER_RPC_URL_137) },
    // base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
    // arbitrum: {
    //   chainId: 42161,
    //   transport: http(process.env.PONDER_RPC_URL_42161),
    // },
    // anvil: {
    //   chainId: 31337,
    //   transport: http(process.env.PONDER_RPC_URL_8545),
    // },
  },
  contracts: {
    EntryPoint: {
      abi: EntryPointAbi,
      address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
      network: {
        // ethereum: {
        //   startBlock: 17012204,
        // },
        // optimism: {
        //   startBlock: 88234528,
        // },
        polygon: {
          startBlock: 41335185,
        },
        // base: {
        //   startBlock: 1854367,
        // },
        // arbitrum: {
        //   startBlock: 78720307,
        // },
        // anvil: {
        //   startBlock: 0,
        // },
      },
    },
  },
});
