import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  AccountDeployed: p.createTable({
    // Log data
    id: p.string(), // userOpHash
    sender: p.string(),
    factory: p.string(),
    paymaster: p.string(),

    // Metadata
    chainId: p.int(),
    blockNumber: p.bigint(),
    blockHash: p.string(),
    timestamp: p.bigint(),
    transactionHash: p.string(),
    bundler: p.string(),
  }),
  UserOperationEvent: p.createTable({
    // Log data
    id: p.string(), // userOpHash
    sender: p.string(),
    paymaster: p.string(),
    nonce: p.bigint(),
    success: p.boolean(),
    actualGasCost: p.bigint(),
    actualGasUsed: p.bigint(),

    // Metadata
    chainId: p.int(),
    blockNumber: p.bigint(),
    blockHash: p.string(),
    timestamp: p.bigint(),
    transactionHash: p.string(),
    bundler: p.string(),
  }),
}));
