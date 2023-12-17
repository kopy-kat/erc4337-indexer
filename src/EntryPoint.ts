import { ponder } from "@/generated";

ponder.on("EntryPoint:AccountDeployed", async ({ event, context }) => {
  const { args, block, transaction } = event;
  const { db, network } = context;

  await db.AccountDeployed.create({
    id: args.userOpHash,
    data: {
      sender: args.sender,
      factory: args.factory,
      paymaster: args.paymaster,
      chainId: network.chainId,
      blockNumber: transaction.blockNumber,
      blockHash: transaction.blockHash,
      timestamp: block.timestamp,
      transactionHash: transaction.hash,
      bundler: transaction.from,
    },
  });
});

ponder.on("EntryPoint:UserOperationEvent", async ({ event, context }) => {
  const { db, network } = context;
  const { args, block, transaction } = event;

  await db.UserOperationEvent.create({
    id: args.userOpHash,
    data: {
      sender: args.sender,
      paymaster: args.paymaster,
      nonce: args.nonce,
      success: args.success,
      actualGasCost: args.actualGasCost,
      actualGasUsed: args.actualGasUsed,
      chainId: network.chainId,
      blockNumber: transaction.blockNumber,
      blockHash: transaction.blockHash,
      timestamp: block.timestamp,
      transactionHash: transaction.hash,
      bundler: transaction.from,
    },
  });
});
