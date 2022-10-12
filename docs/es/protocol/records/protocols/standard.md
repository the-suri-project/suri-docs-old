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

| Nombre    | Patrón                 | Descripción                             |
|-----------|------------------------|-----------------------------------------|
| Texto     | `text(STRING)`         | Dato de texto plano codificado en UTF-8 |
| Texto DNS | `dns+txt(DOMAIN_NAME)` | Un registro DNS `TXT`                   |

## Protocolo de datos

Define los datos en formato binario:

| Nombre | Patrón        | Description    |
|--------|---------------|----------------|
| Bytes  | `bytes(DATA)` | Lista de bytes |

## Meta protocolos

Estos protocolos añaden metainformación a la pila de protocolos, deberían usarse al final:

| Nombre      | Patrón                           | Descripción                            |
|-------------|----------------------------------|----------------------------------------|
| Metadatos   | `meta(key: value, key2: value2)` | Define una lista de pares clave-valor. |
| Meta flags  | `meta+flags(flag1, flag2)`       | Define una lista de banderas.          |

Por ejemplo, para definir el contenido de los datos del registro como
imagen `.png`: `bytes(IMAGE_DATA)<meta("mime": "image/png")`.

## Protocolos de dirección blockchain

Para definir una dirección en una blockchain específica:

| Nombre   | Patrón                       | Descripción                 |
|----------|------------------------------|-----------------------------|
| Solana   | `sol+addr(SOLANA_ADDRESS)`   | Una dirección de [Solana]   |
| Ethereum | `eth+addr(ETHEREUM_ADDRESS)` | Una dirección de [Ethereum] |
| Bitcoin  | `btc+addr(BITCOIN_ADDRESS)`  | Una dirección de [Bitcoin]  |
| Arweave  | `arwv+addr(ARWEAVE_ADDRESS)` | Una dirección de [Arweave]  |

::: note Más info
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

| Nombre | Patrón                          | Descripción                   |
|--------|---------------------------------|-------------------------------|
| [UDP]  | `udp(PORT) < NETWORK_PROTOCOL`  | User Datagram Protocol        |
| [TCP]  | `tcp(PORT) < NETWORK_PROTOCOL`  | Transmission Control Protocol |
| [TLS]  | `tcp(PORT) < TCP_PROTOCOL`      | Transport Layer Security      |
| [SNI]  | `sni(HOST_NAME) < TLS_PROTOCOL` | Server Name Indication        |
| [QUIC] | `quic(PORT) < NETWORK_PROTOCOL` | QUIC transport protocol       |

## Protocolos de aplicación

| Nombre  | Patrón                                              | Descripción                        |
|---------|-----------------------------------------------------|------------------------------------|
| [FTP]   | `ftp < TCP_PROTOCOL`                                | File Transfer Protocol             |
| [HTTP]  | `http < TCP_PROTOCOL` o `http(PATH) < TCP_PROTOCOL` | Hypertext Transfer Protocol        |
| [HTTPS] | `http < TLS_PROTOCOL` o `http(PATH) < TLS_PROTOCOL` | Hypertext Transfer Protocol Secure |
| [WS]    | `ws < TCP_PROTOCOL` o `ws(PATH) < TCP_PROTOCOL`     | WebSocket Protocol                 |
| [WSS]   | `ws < TLS_PROTOCOL` o `ws(PATH) < TLS_PROTOCOL`     | WebSocket Protocol Secure          |
| [SSH]   | `ssh(USERNAME) < TCP_PROTOCOL`                      | Secure Shell protocol              |
| [IMAP]  | `imap < TCP_PROTOCOL`                               | Internet Message Access Protocol   |
| [POP3]  | `pop3 < TCP_PROTOCOL`                               | Post Office Protocol               |
| [SMTP]  | `smtp < TCP_PROTOCOL`                               | Simple Mail Transfer Protocol      |

## Protocolos blockchain

Estos protocolos cambian el significado de los siguientes protocolos asociándolos a una blockchain específica.

| Nombre     | Patrón            | Descripción         |
|------------|-------------------|---------------------|
| [Solana]   | `sol < PROTOCOL`  | Solana blockchain   |
| [Ethereum] | `eth < PROTOCOL`  | Ethereum blockchain |
| [Bitcoin]  | `btc < PROTOCOL`  | Bitcoin blockchain  |
| [Arweave]  | `arwv < PROTOCOL` | Arweave blockchain  |

::: note Más info
Cualquier otro protocolo de blockchain debería seguir el mismo patrón para seguir el estándar.
:::

## Protocolos de definición

Estos protocolos dan un sentido a un protocolo de datos o texto.

| Nombre              | Patrón                                            | Descripción                                       |
|---------------------|---------------------------------------------------|---------------------------------------------------|
| MailTo              | `mailto < TEXT_PROTOCOL`                          | Email de contacto público                         |
| Wallet              | `wallet < BLOCKCHAIN_PROTOCOL < ADDRESS_PROTOCOL` | Wallet público                                    |
| Wallet              | `owner+name < TEXT_PROTOCOL`                      | Define el nombre de usuario del dueño del suri    |
| Website             | `owner+web < HTTP_PROTOCOL`                       | Define las web del dueño del suri                 |
| Suri Alias          | `suri+alias(SOLANA_ADDRESS)`                      | Define una relación bidireccional entre dos suris |
| Profile Name        | `profile+name < TEXT_PROTOCOL`                    | Nombre público usado en redes sociales            |
| Profile Description | `profile+desc < TEXT_PROTOCOL`                    | Descripción pública usada en redes sociales       |
| Profile Image       | `profile+pic < HTTP_PROTOCOL`                     | Imagen de perfil pública usada en redes sociales  |

## Ejemplos

Aquí tienes diferentes ejemplos de un registro suri:

- **Definición de sitio web3 usando HTTPS**: `http<tls<tcp(443)<ipv4(127.0.0.1)`
- **Definición de sitio web2 utilizando**: `http<tls<tcp(443)<dns(suri.domains)`
- **Wallet en Solana**: `carpeta<sol<sol+addr(DIRECCIÓN)`
- **Wallet en otro blockchain**:
    - `wallet<CHAIN_NAME<CHAIN_NAME+addr(ADDRESS)`
    - o `wallet<CHAIN_NAME<bytes(ADDRESS)`

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