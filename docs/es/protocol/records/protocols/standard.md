<style>
td > code {
    white-space: nowrap;
}
</style>

# Protocolos estándar

Aquí hay una lista de protocolos que son soportados nativamente en **Suri**. Están clasificados según su tipo.

::: note Nota
La mayoría de los protocolos no significan nada por sí mismos, como los protocolos de texto o de datos, sino que necesitan ser combinados con otros.
:::

## Protocolos de texto

Define datos en formato textual:

| Nombre     | Patrón                | Descripción                                |
|-----------|------------------------|--------------------------------------------|
| Texto     | `text(STRING)`         | Dato de texto plano coficiado en UTF-8     |
| Texto DNS | `dns+txt(DOMAIN_NAME)` | Un registro DNS `TXT`                      |

## Protocolo de datos

Define los datos en formato binario:

| Nombre| Patrón        | Descrición        |
|-------|---------------|-------------------|
| Bytes | `bytes(DATA)` |Texto plano binario|

## Meta protocolos

Estos protocolos añaden metainformación a la pila de protocolos, debería usarse al final:

| Nombre      | Patrón                           | Descripción                        |
|-------------|----------------------------------|------------------------------------|
| Metadatos   | `meta(key: value, key2: value2)` | Define una lista de pares.         |
| Meta flags  | `meta+flags(flag1, flag2)`       | Define una lista de flags.         |

Por ejemplo, para definir el contenido de los datos del registro como png: `bytes(IMAGE_DATA)<meta("mime": "image/png")`.

## Protocolos de dirección

Para definir una dirección en un blockchain específico:

| Nombre   | Patrón                       | Descripción             |
|----------|------------------------------|-------------------------|
| Solana   | `sol+addr(SOLANA_ADDRESS)`   | Una dirección Solana    |
| Ethereum | `eth+addr(ETHEREUM_ADDRESS)` | Una dirección Ethereum  |
| Bitcoin  | `btc+addr(BITCOIN_ADDRESS)`  | Una dirección Bitcoin   |
| Arweave  | `arwv+addr(ARWEAVE_ADDRESS)` | Una dirección Arweave   |

::: note Insight
Cualquier otro protocolo _Address_ debe seguir el mismo patrón para seguir el estándar, por
ejemplo: `MY_CHAIN+addr(ADDRESS)`.
:::

## Protocolos de red

| Nombre        | Patrón                      | Descripción                                    |
|---------------|-----------------------------|------------------------------------------------|
| [IPv4]        | `ip4(IPV4_ADDRESS)`         | Internet Protocol version 4                    |
| [IPv6]        | `ip6(IPV6_ADDRESS)`         | Internet Protocol version 6                    |
| [DNS]         | `dns(DOMAIN_NAME)`          | Registro DNS resoluble a IPv4 o IPv6           |
| Network Alias | `net-alias(SOLANA_ADDRESS)` | Un alias para dirección de red en otro Suri    |

## Protocolos de transporte

| Nombre        | Patrón                      | Descripción                                    |
|--------|---------------------------------|-------------------------------|
| [UDP]  | `udp(PORT) < NETWORK_PROTOCOL`  | User Datagram Protocol        |
| [TCP]  | `tcp(PORT) < NETWORK_PROTOCOL`  | Transmission Control Protocol |
| [TLS]  | `tcp(PORT) < TCP_PROTOCOL`      | Transport Layer Security      |
| [SNI]  | `sni(HOST_NAME) < TLS_PROTOCOL` | Server Name Indication        |
| [QUIC] | `quic(PORT) < NETWORK_PROTOCOL` | QUIC transport protocol       |

## Application protocols

| Nombre  |                  Patrón                              | Descripción                            |
|---------|------------------------------------------------------|----------------------------------------|
| [FTP]   | `ftp < TCP_PROTOCOL`                                 | File Transfer Protocol                 |
| [HTTP]  | `http < TCP_PROTOCOL` or `http(PATH) < TCP_PROTOCOL` | The Hypertext Transfer Protocol        |
| [HTTPS] | `http < TLS_PROTOCOL` or `http(PATH) < TLS_PROTOCOL` | The Hypertext Transfer Protocol Secure |
| [WS]    | `ws < TCP_PROTOCOL` or `ws(PATH) < TCP_PROTOCOL`     | The WebSocket Protocol                 |
| [WSS]   | `ws < TLS_PROTOCOL` or `ws(PATH) < TLS_PROTOCOL`     | The WebSocket Protocol Secure          |
| [SSH]   | `ssh(USERNAME) < TCP_PROTOCOL`                       | The Secure Shell protocol              |
| [IMAP]  | `imap < TCP_PROTOCOL`                                | The Internet Message Access Protocol   |
| [POP3]  | `pop3 < TCP_PROTOCOL`                                | The Post Office Protocol               |
| [SMTP]  | `smtp < TCP_PROTOCOL`                                | The Simple Mail Transfer Protocol      |

## Protocolos blockchain

Estos protocolos cambian el significado de los siguientes protocolos asociándolos a un blockchain específico.

| Nombre     | Patrón            | Descripción             |
|------------|-------------------|-------------------------|
| [Solana]   | `sol < PROTOCOL`  |  Solana blockchain   |
| [Ethereum] | `eth < PROTOCOL`  |  Ethereum blockchain |
| [Bitcoin]  | `btc < PROTOCOL`  |  Bitcoin blockchain  |
| [Arweave]  | `arwv < PROTOCOL` |  Arweave blockchain  |

::: note Insight
Cualquier otro protocolo de blockchain debería seguir el mismo patrón para seguir el estándar.
:::

## Protocolos de definición

Estos protocolos dan un sentido al protocolo de datos.

| Nombre     | Patrón            | Descripción             |
|---------------------|---------------------------------------------------|--------------------------------------------------------|
| MailTo              | `mailto < TEXT_PROTOCOL`                          | A public email for the suri                            |
| Wallet              | `wallet < BLOCKCHAIN_PROTOCOL < ADDRESS_PROTOCOL` | A public wallet for the suri                           |
| Wallet              | `owner+name < TEXT_PROTOCOL`                      | Defines suri owner's name                              |
| Website             | `owner+web < HTTP_PROTOCOL`                       | Defines suri owner's website                           |
| Suri Alias          | `suri+alias(SOLANA_ADDRESS)`                      | Defines a bidirectional relationship between two suris |
| Profile Name        | `profile+name < TEXT_PROTOCOL`                    | The public name used for social networks               |
| Profile Description | `profile+desc < TEXT_PROTOCOL`                    | The public description used for social networks        |
| Profile Image       | `profile+pic < HTTP_PROTOCOL`                     | The public profile picture used for social networks    |

## Ejemplos

Aquí tienes diferentes ejemplos de un registro suri:

- **Definición de sitio web3 usando HTTPS**: `http<tls<tcp(443)<ipv4()`
- **Definición de sitio web2 utilizando**: `http<tls<tcp(443)<dns(suri.domains)`
- **Monedero Solana**: `carpeta<sol<sol+addr(DIRECCIÓN)`
- **Monedero de otro blockchain**:
    - `wallet<CHAIN_NAME<CHAIN_NAME+addr(ADDRESS)`
    - or `wallet<CHAIN_NAME<bytes(ADDRESS)`

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