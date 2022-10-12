<style>
td > code {
    white-space: nowrap;
}
</style>

# Protocolos estándar

Aquí hay una lista de protocolos que son soportados nativamente en **Suri**. Están clasificados según su tipo.

::: note Nota
La mayoría de los protocolos no significan nada por sí mismos, como los protocolos de texto o de datos, sino que
necesitan ser combinados con otros.
:::

## Protocolos de texto

Define datos en formato textual:

| Nombre         | Patrón                 | Descripción                             |
|----------------|------------------------|-----------------------------------------|
| Texto          | `text(STRING)`         | Dato de texto plano codificado en UTF-8 |
| [DNS TXT][DNS] | `dns-txt(DOMAIN_NAME)` | Un registro DNS `TXT`                   |

## Protocolo de datos

Define los datos en formato binario:

| Nombre | Patrón        | Description    |
|--------|---------------|----------------|
| Bytes  | `bytes(DATA)` | Lista de bytes |

## Protocolos de direcciones en blockchain

Para definir una dirección en una blockchain específica:

| Nombre   | Patrón                       | Descripción                 |
|----------|------------------------------|-----------------------------|
| Solana   | `sol-addr(SOLANA_ADDRESS)`   | Una dirección de [Solana]   |
| Ethereum | `eth-addr(ETHEREUM_ADDRESS)` | Una dirección de [Ethereum] |
| Bitcoin  | `btc-addr(BITCOIN_ADDRESS)`  | Una dirección de [Bitcoin]  |
| Arweave  | `arwv-addr(ARWEAVE_ADDRESS)` | Una dirección de [Arweave]  |

::: note Más info
Cualquier otro protocolo _Address_ debe seguir el mismo patrón para seguir el estándar, por
ejemplo: `MI_BLOCKCHAIN-addr(ADDRESS)`.
:::

## Protocolos de red

| Nombre          | Patrón                 | Descripción                   |
|-----------------|------------------------|-------------------------------|
| [IPv4]          | `ip4(IPV4_ADDRESS)`    | Internet Protocol version 4   |
| [IPv6]          | `ip6(IPV6_ADDRESS)`    | Internet Protocol version 6   |
| [DNS IPv4][DNS] | `dns-ip4(DOMAIN_NAME)` | Registro DNS resoluble a IPv4 |
| [DNS IPV6][DNS] | `dns-ip6(DOMAIN_NAME)` | Registro DNS resoluble a IPv6 |

## Protocolos de transporte

| Nombre | Patrón           | Requisitos       | Descripción                   |
|--------|------------------|------------------|-------------------------------|
| [UDP]  | `udp(PORT)`      | Protocolo de red | User Datagram Protocol        |
| [TCP]  | `tcp(PORT)`      | Protocolo de red | Transmission Control Protocol |
| [TLS]  | `tcp(PORT)`      | Protocolo TCP    | Transport Layer Security      |
| [SNI]  | `sni(HOST_NAME)` | Protocolo TLS    | Server Name Indication        |
| [QUIC] | `quic(PORT)`     | Protocolo de red | QUIC transport protocol       |

## Protocolos de aplicación

| Nombre  | Patrón                | Requisitos    | Descripción                        |
|---------|-----------------------|---------------|------------------------------------|
| [FTP]   | `ftp`                 | Protocolo TCP | File Transfer Protocol             |
| [HTTP]  | `http` o `http(PATH)` | Protocolo TCP | Hypertext Transfer Protocol        |
| [HTTPS] | `http` o `http(PATH)` | Protocolo TLS | Hypertext Transfer Protocol Secure |
| [WS]    | `ws` o `ws(PATH)`     | Protocolo TCP | WebSocket Protocol                 |
| [WSS]   | `ws` o `ws(PATH)`     | Protocolo TLS | WebSocket Protocol Secure          |
| [SSH]   | `ssh(USERNAME)`       | Protocolo TCP | Secure Shell protocol              |
| [IMAP]  | `imap`                | Protocolo TCP | Internet Message Access Protocol   |
| [POP3]  | `pop3`                | Protocolo TCP | Post Office Protocol               |
| [SMTP]  | `smtp`                | Protocolo TCP | Simple Mail Transfer Protocol      |

## Protocolos blockchain

Estos protocolos cambian el significado de los demás protocolos asociándolos a una blockchain específica.

| Nombre     | Patrón | Descripción         |
|------------|--------|---------------------|
| [Solana]   | `sol`  | Solana blockchain   |
| [Ethereum] | `eth`  | Ethereum blockchain |
| [Bitcoin]  | `btc`  | Bitcoin blockchain  |
| [Arweave]  | `arwv` | Arweave blockchain  |

::: note Más info
Cualquier otro protocolo de blockchain debería seguir el mismo patrón para seguir el estándar.
:::

## Protocolos de definición

Estos protocolos dan un significado a un protocolo de datos o texto.

| Nombre                    | Patrón         | Requisitos                        | Descripción                                       |
|---------------------------|----------------|-----------------------------------|---------------------------------------------------|
| MailTo                    | `mailto`       | Protocolo de texto                | Email de contacto público                         |
| Wallet                    | `wallet`       | Protocolo de dirección blockchain | Wallet público                                    |
| Nombre del dueño del suri | `owner-name`   | Protocolo de texto                | Define el nombre de usuario del dueño del suri    |
| Web del dueño del suri    | `owner-web`    | Protocolo HTTP                    | Define las web del dueño del suri                 |
| Nombre de perfil          | `profile-name` | Protocolo de texto                | Nombre público usado en redes sociales            |
| Descripción de perfil     | `profile-desc` | Protocolo de texto                | Descripción pública usada en redes sociales       |
| Image de perfil           | `profile-pic`  | Protocolo HTTP                    | Imagen de perfil pública usada en redes sociales  |

## Ejemplos

Aquí tienes diferentes ejemplos de un registro suri:

- **Definición de sitio web3 usando HTTPS**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Definición de sitio web2 utilizando**: `http+tls+tcp(443)+dns(suri.domains)`
- **Wallet en Solana**: `carpeta+sol+sol-addr(DIRECCIÓN)`
- **Wallet en otro blockchain**: `wallet+CHAIN_NAME-addr(ADDRESS)`

[IPv4]: https://es.wikipedia.org/wiki/IPv4

[IPv6]: https://es.wikipedia.org/wiki/IPv6

[DNS]: https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio

[UDP]: https://es.wikipedia.org/wiki/User_Datagram_Protocol

[TCP]: https://es.wikipedia.org/wiki/Transmission_Control_Protocol

[QUIC]: https://es.wikipedia.org/wiki/QUIC

[TLS]: https://es.wikipedia.org/wiki/Transport_Layer_Security

[SNI]: https://es.wikipedia.org/wiki/Server_Name_Indication

[FTP]: https://es.wikipedia.org/wiki/File_Transfer_Protocol

[HTTP]: https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol

[HTTPS]: https://es.wikipedia.org/wiki/HTTPS

[WS]: https://es.wikipedia.org/wiki/WebSocket

[WSS]: https://es.wikipedia.org/wiki/WebSocket

[SSH]: https://es.wikipedia.org/wiki/Secure_Shell

[IMAP]: https://es.wikipedia.org/wiki/Internet_Message_Access_Protocol

[POP3]: https://es.wikipedia.org/wiki/Post_Office_Protocol

[SMTP]: https://es.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol

[Solana]: https://solana.com/

[Ethereum]: https://ethereum.org/

[Bitcoin]: https://bitcoin.org/

[Arweave]: https://www.arweave.org/