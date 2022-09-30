<style>
td > code {
    white-space: nowrap;
}
</style>

# Standard Protocols

Here is the list of the protocols that are natively supported in **Suri**. They are classified according to its type.

::: note Note
Most of the protocols do not mean anything on their own, like text or data protocols, but they need to be combined
with others.
:::

## Text protocols

| Name     | Pattern                | Description                                |
|----------|------------------------|--------------------------------------------|
| Text     | `text(STRING)`         | Plain textual data encoded in UTF-8 format |
| DNS text | `dns+txt(DOMAIN_NAME)` | A `TXT` DNS record                         |

## Data protocols

| Name  | Pattern       | Description       |
|-------|---------------|-------------------|
| Bytes | `bytes(DATA)` | Plain binary data |

## Address protocols

| Name     | Pattern                      | Description         |
|----------|------------------------------|---------------------|
| Solana   | `sol+addr(SOLANA_ADDRESS)`   | A Solana address    |
| Ethereum | `eth+addr(ETHEREUM_ADDRESS)` | An Ethereum address |
| Bitcoin  | `btc+addr(BITCOIN_ADDRESS)`  | A Bitcoin address   |
| Arweave  | `arwv+addr(ARWEAVE_ADDRESS)` | An Arweave address  |

::: note Insight
Any other Address protocol should follow the same pattern to follow the standard.
:::

## Network protocols

| Name          | Pattern                     | Description                                          |
|---------------|-----------------------------|------------------------------------------------------|
| [IPv4]        | `ip4(IPV4_ADDRESS)`         | Internet Protocol version 4                          |
| [IPv6]        | `ip6(IPV6_ADDRESS)`         | Internet Protocol version 6                          |
| [DNS]         | `dns(DOMAIN_NAME)`          | A DNS record resolvable to an IPv4 or IPv6     |
| Network Alias | `net-alias(SOLANA_ADDRESS)` | An alias for a network address in another Suri |

## Transport protocols

| Name   | Pattern                         | Description                   |
|--------|---------------------------------|-------------------------------|
| [UDP]  | `udp(PORT) < NETWORK_PROTOCOL`  | User Datagram Protocol        |
| [TCP]  | `tcp(PORT) < NETWORK_PROTOCOL`  | Transmission Control Protocol |
| [TLS]  | `tcp(PORT) < TCP_PROTOCOL`      | Transport Layer Security      |
| [SNI]  | `sni(HOST_NAME) < TLS_PROTOCOL` | Server Name Indication        |
| [QUIC] | `quic(PORT) < NETWORK_PROTOCOL` | QUIC transport protocol       |

## Application protocols

| Name    | Pattern                                                 | Description                            |
|---------|---------------------------------------------------------|----------------------------------------|
| [FTP]   | `ftp < TCP_PROTOCOL`                                    | File Transfer Protocol                 |
| [HTTP]  | `http < TCP_PROTOCOL` <br/> `http(PATH) < TCP_PROTOCOL` | The Hypertext Transfer Protocol        |
| [HTTPS] | `http < TLS_PROTOCOL` <br/> `http(PATH) < TLS_PROTOCOL` | The Hypertext Transfer Protocol Secure |
| [WS]    | `ws < TCP_PROTOCOL` <br/> `ws(PATH) < TCP_PROTOCOL`     | The WebSocket Protocol                 |
| [WSS]   | `ws < TLS_PROTOCOL` <br/> `ws(PATH) < TLS_PROTOCOL`     | The WebSocket Protocol Secure          |
| [SSH]   | `ssh(USERNAME) < TCP_PROTOCOL`                          | The Secure Shell protocol              |
| [IMAP]  | `imap < TCP_PROTOCOL`                                   | The Internet Message Access Protocol   |
| [POP3]  | `pop3 < TCP_PROTOCOL`                                   | The Post Office Protocol               |
| [SMTP]  | `smtp < TCP_PROTOCOL`                                   | The Simple Mail Transfer Protocol      |

## Blockchain protocols

These protocols change the meaning of the below protocols associating them to a specific blockchain.

| Name       | Pattern           | Description             |
|------------|-------------------|-------------------------|
| [Solana]   | `sol < PROTOCOL`  | The Solana blockchain   |
| [Ethereum] | `eth < PROTOCOL`  | The Ethereum blockchain |
| [Bitcoin]  | `btc < PROTOCOL`  | The Bitcoin blockchain  |
| [Arweave]  | `arwv < PROTOCOL` | The Arweave blockchain  |

::: note Insight
Any other blockchain protocol should follow the same pattern to follow the standard.
:::

## Definition protocols

These protocols gives data protocol a meaning.

| Name                | Pattern                                                    | Description                                            |
|---------------------|------------------------------------------------------------|--------------------------------------------------------|
| MailTo              | `mailto < TEXT_PROTOCOL`                                   | A public email for the suri                            |
| Wallet              | `wallet < BLOCKCHAIN_PROTOCOL` <br /> `< ADDRESS_PROTOCOL` | A public wallet for the suri                           |
| Wallet              | `owner+name < TEXT_PROTOCOL`                               | Defines suri owner's name                              |
| Website             | `owner+web < HTTP_PROTOCOL`                                | Defines suri owner's website                           |
| Suri Alias          | `suri+alias(SOLANA_ADDRESS)`                               | Defines a bidirectional relationship between two suris |
| Profile Name        | `profile+name < TEXT_PROTOCOL`                             | The public name used for social networks               |
| Profile Description | `profile+desc < TEXT_PROTOCOL`                             | The public description used for social networks        |
| Profile Image       | `profile+pic < HTTP_PROTOCOL`                              | The public profile picture used for social networks    |

## Examples

Here you have different examples of a suri records:

- **Web3 website definition using HTTPS**: `http>tls>tcp(443)>ipv4()`
- **Web2 website definition using**: `http>tls>tcp(443)>dns(suri.domains)`
- **Solana wallet**: `wallet>sol>sol+addr(<address>)`
- **Other blockchain wallet**: `wallet>CHAIN_NAME>bytes(ADDRESS)`

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