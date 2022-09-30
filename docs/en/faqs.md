# FAQs

This is meant to be a list of Frequently Asked Question related to the entirety of **Suri Project**'s scope, including the domains and
the protocol.

## Bookings

<FaqBox title="How can I book a suri?">

Suris can be [booked](https://suri.domains/booking) now. You can book a suri solving the challenge of one (or more) of
the free methods or by directly buying one.

</FaqBox>

<FaqBox title="How can I obtain the NFT corresponding to my booking?">

Once you have completed the booking process, you need to go to your [suri list](https://suri.domains/my-suris) and click
on any of the `Generate NFT` buttons.

After that we will require you to sign a transaction to mint the booking NFT so you can receive it in your wallet. This process
is totally free except for the network fees due to the minting process.

Note that this process can take a few minutes to complete.

</FaqBox>

<FaqBox title="I've already booked a suri, what can I do with it?">

Until Phase 2 of  **Suri project** , suris are only booked for future use. _BUT_, as the owner of the
booking NFT will be in fact the owner of the suri domain, you can list it in any marketplace and sell it, change it or
any other standard actions available for NFTs.

</FaqBox>

<FaqBox title="What happens if I lose a booking NFT or if I burn it?">

Unless proof of ownership of the booking NFT is provided, in which case we would proceed to cancel it, the bookings will
follow these rules:

- **Free bookings** will have a period of 1 month to be claimed by the owner. After that period, the suri will be open
  for anyone to buy it.
- On the other hand, **paid bookings** will have an entire calendar year (the paid period) to claim the suri. After that, the suri
  will be open again for anyone to buy it.

</FaqBox>

## Economics

<FaqBox title="Will I be able to buy my own Suri domain?">

Of course, anyone can buy any [Top Level][TLD] suri domain and any other domain under one of the suris owned by the
**Suri project**. For any other suri, you will need to contact its owner and negotiate with him.

</FaqBox>

<FaqBox title="When will I be able to buy a Suri domain?">

Suris can be [booked](https://suri.domains/booking) now and will be available for claim/purchase once Phase 2 of the
project is released. This should happen at some point in Q4 of 2022.

</FaqBox>

<FaqBox title="Is there any value remaining in expired NFTs?">

No, expired NFTs have no value other than the one given to them.

We recommend you to burn NFTs to avoid confusion and not to occupy space in your wallet, which can be made by using
our [burning service](https://suri.domains/burn). Our tool will give you more Sol for closing the accounts than what you
would obtain by burning them in your wallet or other tools.

</FaqBox>

<FaqBox title="Are NFTs going to be sold as a source of revenue?">

NFTs in **Suri** are just a means to an end, so they don't have any value on their own, other than the one given to them. Whilst
they are active, the value would be the one of the suri domain they represent. Meanwhile, when they expire, they have no residual
value.

</FaqBox>

<FaqBox title="Why is Suri using a subscription model?">

**Suri** uses a configurable subscription model to open for more versatility than the current Web2 models. This model
offers different possibilities such as:

- Free suri for a period.
- Single payment suris for a period, e.g. 10$ for 1 year.
- Recurring payment suris for a period, e.g. 1$ per month up to 1 year.

With this model we achieve one of **Suri**'s main goals: suris must expire to not be permanently lost.

</FaqBox>

<FaqBox title="Can I buy a sublevel of a suri?">

Children are managed by their parent, so you need to ask the parent's owner in order to to buy a child suri.

> Note that almost all children of suris owned by the **Suri Project** can be directly bought
> at [suri.domains](https://suri.domains)

</FaqBox>

<FaqBox title="Can I sell my Suri domain?">

As suris are NFTs you can list it in any marketplace and sell it or change it for any other asset. When a suri is
transferred, the new owner receives the current suri with exactly the same configuration, no cleaning action is taking
place here.

</FaqBox>

## Technical FAQs

<FaqBox title="Why don't we use SNS?">

The [Solana Name Service][SNS] (SNS) is a great project but it is extremely simple in its concept and at the same time
very messy to use. We want to provide a better experience for the users, that's the reason behind building a new Solana
program for **Suri**.

</FaqBox>

<FaqBox title="Can I hold my Suri domain's NFT in my wallet?">

Because **Suri** uses NFTs as the source of ownership, you can hold them in any wallet that supports SPL tokens.

</FaqBox>

<FaqBox title="Why does Suri use NFTs?">

NFTs are a great way to represent ownership of a digital asset like a suri, so we decided to use them as a familiar
method for people to interact with the **Suri project**. Moreover, NFTs have a great support in markets and wallets, so
apps can easily integrate with them.

</FaqBox>

<FaqBox title="When does my suri expire?">

Your suri can expire under two conditions:

1. The expiration date of the suri is reached.
2. The subscription funds are not enough to renew the suri for a next period.

</FaqBox>

<FaqBox title="What happens when my Suri domain expires?">

As you probably already know, Suris follow a subscription model in which they have an expiration date. When that date
comes, the domain will be available for anyone to buy it. So the question here is, what happens with the associated NFT?

The solution is very simple, the NFT mint (the definition, not the token itself) will be automatically canceled through
an off-chain program, so the next owner will mint a nwe NFT for the domain.

</FaqBox>

<FaqBox title="How do I confirm the veracity of a suri NFT?">

In short, you must check the SVC (Suri Verification Code).

**Explanation**

After expiration, the associated NFT will be automatically canceled but this process can take some time. That's why we
offer the possibility to check the veracity of a NFT through
the [verification service](https://suri.domains/domain/verify). This website will show you the current NFT with its SVC,
so:

::: danger
NEVER BUY A NFT WITH A DIFFERENT SVC THAN THE ONE SHOWN IN THE VERIFICATION WEBSITE
:::

</FaqBox>

<FaqBox title="Can I use the Suri's on-chain program directly?">

Yes, you will be able to use the on-chain program directly in the future through our list
of [SDKs](/en/development/sdk/), but you need to wait until the Phase 2 of the project is released.

</FaqBox>

[TLD]: https://en.wikipedia.org/wiki/Top-level_domain

[SNS]: https://spl.solana.com/name-service#:~:text=A%20SPL%20program%20for%20issuing,public%20keys%20with%20various%20links.