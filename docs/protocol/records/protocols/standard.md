<style>
td > code {
    white-space: nowrap;
}
</style>

# Standard Protocols

Here is a list of protocols which are natively supported in **Suri**. They are classified according to its type.

::: note Note
Most of the protocols do not mean anything on their own, like text or data protocols, but they need to be combined
with others.
:::

## Text protocols

Defines data in a textual format:

| Name           | Pattern                | Description                                |
|----------------|------------------------|--------------------------------------------|
| Text           | `text(STRING)`         | Plain textual data encoded in UTF-8 format |
| [DNS TXT][DNS] | `dns-txt(DOMAIN_NAME)` | A `TXT` DNS record                         |

## Data protocol

Defines data in a binary format:

| Name  | Pattern       | Description       |
|-------|---------------|-------------------|
| Bytes | `bytes(DATA)` | Plain binary data |

## Address protocols

To define an address in a specific blockchain:

| Name     | Pattern                      | Description           |
|----------|------------------------------|-----------------------|
| Solana   | `sol-addr(SOLANA_ADDRESS)`   | A [Solana] address    |
| Ethereum | `eth-addr(ETHEREUM_ADDRESS)` | An [Ethereum] address |
| Bitcoin  | `btc-addr(BITCOIN_ADDRESS)`  | A [Bitcoin] address   |
| Arweave  | `arwv-addr(ARWEAVE_ADDRESS)` | An [Arweave] address  |

::: note Insight
Any other _Address_ protocol should follow the same pattern to follow the standard, for
example: `MY_CHAIN-addr(ADDRESS)`.
:::

## Network protocols

| Name            | Pattern                | Description                        |
|-----------------|------------------------|------------------------------------|
| [IPv4]          | `ip4(IPV4_ADDRESS)`    | Internet Protocol version 4        |
| [IPv6]          | `ip6(IPV6_ADDRESS)`    | Internet Protocol version 6        |
| [DNS IPv4][DNS] | `dns-ip4(DOMAIN_NAME)` | A DNS record resolvable to an IPv4 |
| [DNS IPv6][DNS] | `dns-ip6(DOMAIN_NAME)` | A DNS record resolvable to an IPv6 |

## Transport protocols

| Name   | Pattern          | Requirements     | Description                   |
|--------|------------------|------------------|-------------------------------|
| [UDP]  | `udp(PORT)`      | Network Protocol | User Datagram Protocol        |
| [TCP]  | `tcp(PORT)`      | Network Protocol | Transmission Control Protocol |
| [TLS]  | `tls`            | TCP Protocol     | Transport Layer Security      |
| [SNI]  | `sni(HOST_NAME)` | TLS Protocol     | Server Name Indication        |
| [QUIC] | `quic(PORT)`     | Network Protocol | QUIC transport protocol       |

## Application protocols

| Name    | Pattern                | Requirements | Description                        |
|---------|------------------------|--------------|------------------------------------|
| [FTP]   | `ftp`                  | TCP Protocol | File Transfer Protocol             |
| [HTTP]  | `http` or `http(PATH)` | TCP Protocol | Hypertext Transfer Protocol        |
| [HTTPS] | `http` or `http(PATH)` | TLS Protocol | Hypertext Transfer Protocol Secure |
| [WS]    | `ws` or `ws(PATH)`     | TCP Protocol | WebSocket Protocol                 |
| [WSS]   | `ws` or `ws(PATH)`     | TLS Protocol | WebSocket Protocol Secure          |
| [SSH]   | `ssh(USERNAME)`        | TCP Protocol | Secure Shell protocol              |
| [IMAP]  | `imap`                 | TCP Protocol | Internet Message Access Protocol   |
| [POP3]  | `pop3`                 | TCP Protocol | Post Office Protocol               |
| [SMTP]  | `smtp`                 | TCP Protocol | Simple Mail Transfer Protocol      |

## Blockchain protocols

These protocols change the meaning of the other set of protocols associating them to a specific blockchain.

| Name       | Pattern | Description             |
|------------|---------|-------------------------|
| [Solana]   | `sol`   | The Solana blockchain   |
| [Ethereum] | `eth`   | The Ethereum blockchain |
| [Bitcoin]  | `btc`   | The Bitcoin blockchain  |
| [Arweave]  | `arwv`  | The Arweave blockchain  |

::: note Insight
Any other blockchain protocol should follow the same pattern to follow the standard.
:::

## Definition protocols

Give data and text protocols a meaning.

| Name                | Pattern                                  | Requirements     | Description                                            |
|---------------------|------------------------------------------|------------------|--------------------------------------------------------|
| MailTo              | `mailto`                                 | Text Protocol    | A public email for the suri                            |
| Wallet              | `wallet`                                 | Address Protocol | A public wallet for the suri                           |
| Owner Name          | `owner-name`                             | Text Protocol    | Defines suri owner's name                              |
| Owner Website       | `owner-web`                              | Http Protocol    | Defines suri owner's website                           |
| Profile Name        | `profile-name`                           | Text Protocol    | The public name used for social networks               |
| Profile Description | `profile-desc`                           | Text Protocol    | The public description used for social networks        |
| Profile Image       | `profile-pic`                            | Http Protocol    | The public profile picture used for social networks    |

## Examples

Here you have different examples of a suri records:

- **Web3 website definition using HTTPS**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Web2 website definition using**: `http+tls+tcp(443)+dns-ipv4(suri.domains)`
- **Solana wallet**: `wallet+sol-addr(ADDRESS)`
- **Other blockchain wallet**: `wallet+CHAIN_NAME-addr(ADDRESS)`

[IPv4]: https://en.wikipedia.org/wiki/IPv4

[IPv6]: https://en.wikipedia.org/wiki/IPv6

[DNS]: https://en.wikipedia.org/wiki/Domain_Name_System

[UDP]: https://en.wikipedia.org/wiki/User_Datagram_Protocol

[TCP]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol

[QUIC]: https://en.wikipedia.org/wiki/QUIC

[TLS]: https://en.wikipedia.org/wiki/Transport_Layer_Security

[SNI]: https://en.wikipedia.org/wiki/Server_Name_Indication

[FTP]: https://en.wikipedia.org/wiki/File_Transfer_Protocol

[HTTP]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol

[HTTPS]: https://en.wikipedia.org/wiki/HTTPS

[WS]: https://en.wikipedia.org/wiki/WebSocket

[WSS]: https://en.wikipedia.org/wiki/WebSocket

[SSH]: https://en.wikipedia.org/wiki/Secure_Shell

[IMAP]: https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol

[POP3]: https://en.wikipedia.org/wiki/Post_Office_Protocol

[SMTP]: https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol

[Solana]: https://solana.com/

[Ethereum]: https://ethereum.org/

[Bitcoin]: https://bitcoin.org/

[Arweave]: https://www.arweave.org/