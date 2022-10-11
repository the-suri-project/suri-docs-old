# Casos de uso y claves del proyecto

**El protocolo SUNS** mejorará el actual servicio [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) para crear un nuevo
estándar para los desarrollos realizados en Web3: la próxima generación de Internet.

## Beneficios para el usuario

A continuación se ofrece una lista de beneficios derivados de este proyecto de infraestructura:

- **Dominios de primer nivel abiertos ([TLDs](https://en.wikipedia.org/wiki/Top-level_domain))**: los dominios con un solo nivel de
  jerarquía (por ejemplo, `suri`, `myName`, ...) estarán abiertos a que cualquiera los registre. Esto permitirá una Internet más abierta y
  descentralizada.

- **Suris descentralizados y sin restricciones**: ningún dominio estará prohibido o limitado en su uso, y la propiedad estará
  disponible para todos los usuarios.

  ::: note Insight
  Nuestra política es no prohibir ningún dominio **PERO**, las marcas reconocidas serán protegidas, así como los usuarios notables, etc. contra los malos usos de sus nombres. Además, nos reservamos el derecho de bloquear los TLDs que se utilicen con fines ilegales.
  :::

- **Suris globales**: no están limitados geográficamente. Olvídate de pedir permiso para utilizar un nombre de dominio.

- **Gestión de los hijos**: los padres tienen derecho a gestionar a sus hijos, nadie más decidirá por ti a menos que
  quieras añadir una [autoridad gestora](/es/protocol/authorities/).

- **Todo su contenido en su suri**: bajo un mismo suri, un propietario puede [registrar](/es/protocol/registers/) diferentes
  datos con múltiples fines (enlaces de sitios web, perfiles de redes sociales, carteras de criptomonedas, etc.). Esto permitirá a los usuarios
  construir _Servicios de Identidad Digital_ sobre el protocolo.

## Mejoras técnicas

**El protocolo _SUNS** es una versión en cadena del protocolo [DNS](https://en.wikipedia.org/wiki/Domain_Name_System)
utilizado para navegar por Internet. No se trata de una simple sustitución, sino de una versión muy mejorada. Algunas de sus
principales características son:

- **Descentralizado**: el protocolo funcionará totalmente en cadena, por lo que no habrá ninguna autoridad central (diga adiós a
  ICANN). Además, cada padre tendrá derecho a gestionar a sus hijos directos.

- **Modelo de suscripciones**: los suris pagarán a sus padres para mantenerse activos mediante el pago de una suscripción.

- **Soporte avanzado para protocolos**: El DNS sólo soporta algunos protocolos estándar, como IPv4 (registro A), Email (registro MX),
  etc. Por el contrario, el **Protocolo SUNS** soportará algunos protocolos incorporados pero cualquiera puede añadir soporte para
  cualquier otro protocolo en cualquier momento sin restricciones.

  Esto permite que los suris sean mapeados a carteras de cualquier cadena, sitios web, sociales o cualquier otra fuente de información privada, etc.
  Por lo tanto, permite el uso de suris como un servicio de identidad.

- **Enrutamiento completo**: olvídate de los proxys. El algoritmo de resolución de **SUNS Protocol** permitirá el enrutamiento
  a diferentes servicios en diferentes puertos de la misma máquina sin tener que retransmitir en un proxy inverso.

- **Equilibrio de carga (load balancing)**: el protocolo tendrá soporte incorporado para algunos algoritmos de equilibrio para distribuir la carga
  entre diferentes servidores. Evitando la necesidad de pagar costosos servicios para ello.

## Casos de uso

- **Servicio de identidad**: los suris podrán almacenar cualquier tipo de información. Esto, junto con la criptografía dará
  a los usuarios la capacidad de almacenar información privada en la cadena que puede ser verificada por cualquier persona utilizando algoritmos como
  [ZK-proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof).

- **Marca**: los usuarios podrán utilizar suris [TLD](https://en.wikipedia.org/wiki/Top-level_domain) como `miNombreDeMarca`
  o `@username` para sus identidades personales o profesionales, de modo que sus clientes y proveedores, amigos o familiares
  o quien quiera ponerse en contacto con ellos no tendrá que recordar si su dominio es `.com`, `.org` o cualquiera de
  de los muchos dominios nacionales existentes. En su lugar, sólo tendrán que recordar el **nombre**. Enfatizar lo que es realmente
  importante, y olvidarse de las terminaciones inútiles y sin sentido de los dominios.

::: note Insight
Imagínese una empresa llamada "Fake Company, LTD", que está presente en varios países, como Reino Unido, Estados Unidos y Australia.
En lugar de necesitar los dominios `fakecompany.co.uk`, `fakecompany.us`, `fakecompany.au`, sólo necesitarán el
**suri** `fakecompany`
:::

- **Información social global**: con sólo actualizar sus suris, los usuarios pueden actualizar su identidad corporativa o
  identidad.

- **Autorización en cadena**: los sitios web, las redes sociales o cualquier servicio pueden integrarse con el **Protocolo SUNS** para permitir
  que sus usuarios se registren en sus sistemas con los suris de los usuarios. Estos servicios pueden incluir alguna información en el suri
  para definir que el usuario está autorizado a utilizar sus sistemas, por lo que sólo con proporcionar la propiedad del suri será suficiente para
  volver a iniciar la sesión.

- **Balanceador de carga de servicios**: gracias al soporte incorporado para los algoritmos de balanceo, los usuarios podrán poner sus
  servicios detrás de un suri en lugar de pagar costosos servicios.

- **Servir múltiples sitios web en la misma máquina**: actualmente necesitamos usar proxies inversos para servir múltiples sitios web
  con la misma máquina. Con el **Protocolo SUNS** esto será posible sin necesidad de un reverse proxy.

  ::: note Insight
  Esta característica no se limitará a los sitios web, sino que funcionará para cualquier protocolo/servicio.
  :::

- **Modelos de suscripción**: las empresas pueden desplegar modelos de suscripción dando a sus usuarios un sub suri (por ejemplo
  `netflix.subs.111`) para cobrarles por sus servicios utilizando el modelo de suscripción incorporado. En cuanto el usuario deja de
  pagar o el suri expira, la suscripción se considera terminada, y esto puede reflejarse con una limitación de acceso
  al servicio que hay detrás.

Estas ideas son sólo el principio, la gente es libre de usar y construir sobre el **Protocolo SUNS** de la forma que quiera.

No dudes en unirte a nosotros en el [Discord](https://discord.gg/YdutySHbbk) para contarnos nuevas ideas y casos de uso.