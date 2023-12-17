import { createConfig } from "@ponder/core";
import { http } from "viem";

import { EntryPointAbi } from "./abis/EntryPointAbi";

export default createConfig({
  networks: {
    polygon: { chainId: 137, transport: http(process.env.PONDER_RPC_URL_137) },
  },
  contracts: {
    EntryPoint: {
      abi: EntryPointAbi,
      address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
      network: "polygon",
      startBlock: 41335185,
    },
  },
});
