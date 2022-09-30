# Suris are NFTs

Every suri has an associated NFT which acts as its source of ownership, i.e. the one that owns the NFT owns the suri.

::: note Insight
The metadata and images of the NFTs are auto generated on-demand by an off-chain service.
:::

## Why using NFTs?

NFTs are a great way to represent ownership of a digital asset. They are unique, non-fungible, and can be transferred
from one owner to another. They are also greatly well integrated in the Solana ecosystem:

- Anyone can see the suris they own by simply looking at the NFT section of their wallets.
- They can be transferred from one owner to another by simply sending the NFT.
- They can be listed and sold on any Solana marketplace.
- They can be used in DeFi applications, auctions, raffles, etc.
- ...

Using NFTs makes the **Suri Project** be very well integrated with the ecosystem from the beginning.

## Edge cases

The NFT mapping is not perfect. For example, if a suri expires, the NFT will still be owned by the previous owner. As
you probably already know, once someone owns an SPL token no one can take it away from them, so we cannot get back the
NFT from the previous user.

To work around this problem, the off-chain NFT service will check for edge cases, like suri expiration, lack of funds,
in-program sales, etc. and will update the minting information of the NFT according to the new status.

::: note Insight
Once a suri is expired, the NFT will become useless, so it is recommended to burn it to cleanup your wallets and recover
some funds.
:::

### Security

There is a time between the moment a suri reaches one of those edge cases and the moment the NFT service detects it and
updates the NFT. During this time, the NFT shows the previous state of the suri, which can be misleading.

To avoid derived problems, like scamming, selling expired NFTs, etc. users will need to make sure the _SVC_ (Suri
Verification Code) showed in the NFT match with the real one present in the blockchain if they want to make sure the
suri is in the right state.

::: note Insight
We will offer a service at [suri.domains](https://suri.domains) to verify the SVC of a suri.
:::

## Children customization

NFTs represent the ownership of a suri, but they can also represent their parents so parents will have the ability to
include a custom message and picture in their children's NFTs as a way of making them unique or branded.