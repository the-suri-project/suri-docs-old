# Los suris están representados por NFTs

Cada suri tiene un NFT asociado que actúa como prueba de propiedad, (es decir, el propietario del NFT es el propietario
del suri asociado).

::: note Más info
Los metadatos y las imágenes de los NFTs son autogenerados bajo demanda por un servicio fuera de la blockchain.
:::

## ¿Por qué usar NFTs?

Los NFTs son una gran manera de representar y afirmar la propiedad sobre un activo digital. Son únicos, no fungibles y
pueden transferirse de un propietario a otro. También están muy integrados en el ecosistema de Solana:

- Cualquiera puede revisar todos los suris que posee simplemente mirando la sección NFT de su wallet preferido.
- Se pueden transferir de un propietario a otro simplemente enviando el NFT.
- Pueden ser listados y vendidos en cualquier marketplace de Solana.
- Pueden ser utilizados en aplicaciones DeFi, subastas, sorteos, etc.
- ...

El uso de NFTs ayuda al **Proyecto Suri** a estar finamente integrado dentro del ecosistema desde el principio.

## Casos límite

El mapeo de los suris a NFTs no es perfecto. Por ejemplo, si un suri caduca, el NFT seguirá perteneciendo alanterior
propietario. Como probablemente ya sabes, una vez que alguien posee un token SPL nadie puede quitárselo, así
que no podemos recuperar el NFT del usuario anterior.

Para solucionar este problema, el servicio de NFT fuera de la cadena comprobará los casos límite, como la caducidad del
suri, la falta de fondos, ventas dentro del programa, etc. y actualizará la información del mint del NFT de acuerdo
con el nuevo estado.

::: note
Una vez que un suri ha caducado, el NFT quedará inutilizado, por lo que se recomienda quemarlo para limpiar sus carteras
y recuperar algunos fondos procedentes de los costes del mint.
:::

### Seguridad

Hay un breve lapso de tiempo entre el momento en que un suri alcanza uno de esos casos límite y el momento en que el
servicio fuera de la blockchain lo detecta y actualiza el NFT. Durante este tiempo, el NFT mostrará el estado anterior
del suri, lo que puede inducir a error.

Para evitar problemas derivados de este escenario, como estafas, venta de NFT caducados, etc. los usuarios deberán
asegurarse de que el _SVC_ (Código de Verificación del Suri) mostrado en el NFT coincide con el real, presente en la
blockchain. De este
modo, los usuarios pueden estar seguros de que el suri está en el estado correcto.

::: note Más info
Se ofrecerá un servicio de verificación en [suri.domains](https://suri.domains) específicamente ideado para comprobar el
SVC de un suri.
:::

## Personalización de los hijos

Los NFT representan la propiedad de un suri, pero también pueden representar a sus padres. De este modo, los padres
tendrán la capacidad de incluir un mensaje y una imagen personalizados en los NFT de sus hijos como forma de hacerlos
únicos o de marca.