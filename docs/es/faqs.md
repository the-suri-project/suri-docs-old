# Preguntas frecuentes

Esta es una lista de Preguntas Frecuentes relacionadas con todo el ámbito del Proyecto **Suri**, incluyendo
los dominios y el protocolo.

## Reservas

<FaqBox title="¿Cómo puedo reservar un suri?">

Puedes reservar un suri resolviendo el reto de uno (o varios) de los métodos gratuitos o comprando directamente uno.

</FaqBox>

<FaqBox title="¿Cómo puedo obtener el NFT correspondiente a mi reserva?">

Una vez que hayas completado el proceso de reserva, tendrás que ir a tu lista de suri y hacer clic en cualquiera de
los botones `Generar NFT`.

A continuación, le pediremos que firme una transacción para acuñar el NFT de la reserva y así poder recibirlo en su cartera. Este
proceso es totalmente gratuito, excepto por las tarifas de la red debidas al proceso de acuñación.

Ten en cuenta que este proceso puede tardar unos minutos en completarse.

</FaqBox>

<FaqBox title="Ya he reservado un suri, ¿qué puedo hacer con él?">

Hasta la fase 2 del **proyecto Suri** , los suris sólo se reservan para su uso futuro. _Pero_, como propietario de la
reserva NFT será de hecho el propietario del dominio suri, puede listarlo en cualquier marketplace y venderlo, cambiarlo o
cualquier otra acción estándar disponible para los NFT.

</FaqBox>

<FaqBox title="¿Qué pasa si pierdo un NFT de reserva o si lo quemo?">

Salvo que se acredite la titularidad del NFT de reserva, en cuyo caso se procedería a su anulación, las reservas
seguirán las siguientes reglas:

- **Las reservas gratuitas** tendrán un plazo de 1 mes para ser reclamadas por el propietario. Pasado ese periodo, el suri quedará abierto
  para que cualquiera pueda comprarlo.
- Por otro lado, las **reservas de pago** tendrán todo un año natural (el periodo de pago) para reclamar el suri. Después de
  Después de eso, el suri estará abierto de nuevo para que cualquiera pueda comprarlo.

</FaqBox>

## Compraventa y NFTs

<FaqBox title="¿Podré comprar mi propio dominio Suri?">

Por supuesto, cualquiera puede comprar cualquier dominio suri [Top Level][TLD] y cualquier otro dominio bajo uno de los suris propiedad del
**Proyecto Suri**. Para cualquier otro suri, deberá contactar con su propietario y negociar con él.

</FaqBox>

<FaqBox title="¿Cuándo podré comprar un dominio Suri?">

Los suris estarán disponibles para su reserva en breve y para su reclamación/compra una vez que se libere la fase 2 del proyecto. Esto debería
ocurrir en algún momento del cuarto trimestre de 2022.

</FaqBox>

<FaqBox title="¿Siguen teniendo valor los NFT caducados?">

No, los NFTs caducados no tienen más valor que el que se les ha dado.

Le recomendamos que queme las NFT para evitar confusiones y no ocupar espacio en su cartera, lo que puede hacer utilizando
nuestro servicio de quema. Nuestra herramienta le dará más Sol para cerrar las cuentas que el que obtendría quemándolas
en su cartera u otras herramientas.

</FaqBox>

<FaqBox title="¿Se van a vender los NFT como fuente de ingresos?">

Las NFTs en **Suri** son sólo un medio para conseguir un fin, por lo que no tienen ningún valor por sí mismas, más que el que se les da
a ellos. Mientras están activas, el valor sería el del dominio suri que representan. Mientras tanto, cuando expiran,
no tienen ningún
valor residual.

</FaqBox>

<FaqBox title="¿Por qué Suri utiliza un modelo de suscripción?">

**Suri** utiliza un modelo de suscripción configurable para abrirse a una mayor versatilidad que los modelos actuales de Web2. Este modelo
ofrece diferentes posibilidades como:

- Suri gratis por un periodo.
- Suris de pago único por un periodo, por ejemplo 10$ por 1 año.
- Suris de pago recurrente durante un periodo, por ejemplo 1$ al mes hasta 1 año.

Con este modelo conseguimos uno de los principales objetivos de **Suri**: los suris deben caducar para no perderse definitivamente.

</FaqBox>

<FaqBox title="¿Puedo comprar un subnivel de un suri?">

Los hijos son gestionados por su padre, por lo que debes preguntar al propietario del padre para poder comprar un suri hijo.

> Tenga en cuenta que casi todos los hijos de los suris propiedad del **Proyecto Suri** se pueden comprar directamente
> en [suri.dominios](https://suri.domains)

</FaqBox>

<FaqBox title="¿Puedo vender mi dominio Suri?">

Como los suris son NFTs puedes listarlo en cualquier marketplace y venderlo o cambiarlo por cualquier otro activo. Cuando se transfiere un suri
Cuando se transfiere un suri, el nuevo propietario recibe el suri actual con exactamente la misma configuración, no se realiza ninguna acción de limpieza
limpieza.

</FaqBox>

## Preguntas técnicas frecuentes

<FaqBox title="¿Por qué no usamos el SNS?">

El [Solana Name Service][SNS] (SNS) es un gran proyecto pero es extremadamente simple en su concepto y al mismo tiempo
muy complicado de usar. Queremos proporcionar una mejor experiencia para los usuarios, esa es la razón detrás de la construcción de un nuevo programa de Solana
para **Suri**.

</FaqBox>

<FaqBox title="¿Puedo tener la NFT de mi dominio Suri en mi cartera?">

Debido a que **Suri** utiliza NFTs como fuente de propiedad, puedes mantenerlos en cualquier billetera que soporte tokens SPL.

</FaqBox>

<FaqBox title="¿Por qué Suri utiliza NFTs?">

Los NFTs son una gran manera de representar la propiedad de un activo digital como un suri, por lo que decidimos usarlos como un método familiar
método familiar para que la gente interactúe con el proyecto **Suri**. Además, las NFT tienen un gran apoyo en los mercados y carteras, por lo que
aplicaciones pueden integrarse fácilmente con ellas.

</FaqBox>

<FaqBox title="¿Cuándo caduca mi suri?">

Tu suri puede caducar bajo dos condiciones:

1. Se alcanza la fecha de caducidad del suri.
2. Los fondos de la suscripción no son suficientes para renovar el suri para un próximo período.

</FaqBox>

<FaqBox title="¿Qué pasa cuando mi dominio Suri expira?">

Como probablemente ya sabes, los Suris siguen un modelo de suscripción en el que tienen una fecha de caducidad. Cuando esa fecha
Cuando llegue, el dominio estará disponible para que cualquiera pueda comprarlo. Entonces la pregunta es, ¿qué pasa con el NFT asociado?

La solución es muy sencilla, el _mint_ del NFT (la definición, no el token en sí) se cancelará automáticamente a través de
un programa fuera de la cadena, por lo que el siguiente propietario acuñará un nuevo NFT para el dominio.

</FaqBox>

<FaqBox title="¿Cómo puedo confirmar la veracidad de un NFT suri?">

En resumen: debes comprobar el SVC (Código de Verificación Suri).

**Explicación**

Después de la expiración, la NFT asociada se cancelará automáticamente, pero este proceso puede llevar algún tiempo. Por ello, ofrecemos la posibilidad de comprobar la veracidad de un NFT a través del servicio de verificación. Este sitio web le mostrará el
NFT actual con su VPC, así que:

::: danger
NUNCA COMPRES UN NFT CON UN SVC DIFERENTE AL QUE SE MUESTRA EN LA WEB DE VERIFICACIÓN
:::

</FaqBox>

<FaqBox title="¿Puedo utilizar el programa en cadena de Suri directamente?">

Sí, podrás utilizar el programa on-chain directamente en el futuro a través de nuestra lista
de [SDKs](/es/development/sdk/), pero tienes que esperar a que se libere la Fase 2 del proyecto.

</FaqBox>

[TLD]: https://en.wikipedia.org/wiki/Top-level_domain

[SNS]: https://spl.solana.com/name-service#:~:text=Un%20SPL%20programa%20para%20emitir,llaves%20públicas%20con%20varios%20enlaces.

