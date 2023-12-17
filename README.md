# ERC-4337 Indexer

Simple indexer for ERC-4337 accounts, built using [ponder](https://ponder.sh/).

## Installation

1. Install dependencies

```bash
pnpm install
```

2. Create a `.env` file, copy the contents of `.env.example` into it, and fill in the values.

## Usage

```bash
pnpm dev
```

## Networks

### Adding a network

To add a network, add a new entry to the `networks` object in `ponder.config.ts` and add the network name to the `network` object inside the `contracts` object below. You will also need to define an RPC url in the `.env` file.

### Removing a network

To remove a network, remove the entry from the `networks` object in `ponder.config.ts` and remove the network name from the `network` object inside the `contracts` object below.

## Querying

While the indexer is running, you can query the data using the GraphQL playground at `http://localhost:42069/`. Some example queries are:

Get all deployed accounts:

```graphql
{
  accountDeployeds {
    id
    sender
    factory
    paymaster
    chainId
    blockNumber
    blockHash
    timestamp
    transactionHash
    bundler
  }
}
```

Get all deployed accounts for a specific factory:

```graphql
{
  accountDeployeds(
    where: { factory: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3" }
  ) {
    id
    factory
    paymaster
    sender
    chainId
    blockNumber
    blockHash
    timestamp
    transactionHash
    bundler
  }
}
```

Get all `UserOperations`:

```graphql
{
  userOperationEvents {
    actualGasCost
    actualGasUsed
    id
    nonce
    paymaster
    sender
    success
    chainId
    blockNumber
    blockHash
    timestamp
    transactionHash
    bundler
  }
}
```

Get all `UserOperations` for a specific account:

```graphql
{
  userOperationEvents(
    where: {
      sender: "0x0f16e038614fd00cf13bb64f9e4e3a95af1ef2aa"
      chainId: 137
    }
  ) {
    actualGasCost
    actualGasUsed
    id
    nonce
    paymaster
    sender
    success
    chainId
    blockNumber
    blockHash
    timestamp
    transactionHash
    bundler
  }
}
```

Get all `UserOperations` for a specific account on a specific chain:

```graphql
{
  userOperationEvents(
    where: { sender: "0x0f16e038614fd00cf13bb64f9e4e3a95af1ef2aa" }
  ) {
    actualGasCost
    actualGasUsed
    id
    nonce
    paymaster
    sender
    success
    chainId
    blockNumber
    blockHash
    timestamp
    transactionHash
    bundler
  }
}
```
