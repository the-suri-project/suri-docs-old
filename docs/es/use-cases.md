# Casos de uso y claves del proyecto

El protocolo **SUNS** es parte del proyecto **Suri** y mejorará el actual
servicio [DNS](https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio) para crear un nuevo estándar para los
desarrollos realizados en Web3: la próxima generación de Internet.

## Beneficios para el usuario

A continuación se ofrece una lista de beneficios derivados al adoptar el proyecto:

- **Disponibilidad de dominios de primer nivel ([TLDs](https://es.wikipedia.org/wiki/Dominio_de_nivel_superior))**: los
  dominios con un solo nivel de jerarquía (por ejemplo, `suri`, `miNombre`, ...) estarán disponibles a que cualquiera
  los registre. Esto permitirá una Internet más abierta y descentralizada.

- **Suris descentralizados y sin restricciones**: ningún dominio estará prohibido o limitado en su uso, y la propiedad
  estará disponible para todos los usuarios.

  ::: note Más info
  Nuestra política es no prohibir ningún dominio **PERO**, cualquier marca reconocida, así como usuarios notables, etc.
  serán protegidos contra el mal uso de sus nombres. Además, nos reservamos el derecho de bloquear los TLDs que se
  utilicen con fines ilegales.
  :::

- **Suris globales**: no están limitados geográficamente. Olvídate de pedir permiso para utilizar un nombre de dominio.

- **Gestión de los hijos**: los padres tienen derecho a gestionar a sus hijos, nadie más decidirá por ti a menos que
  quieras añadir una [autoridad delegada](/es/protocol/authorities/).

- **Contenido localizado**: bajo un mismo suri, un propietario puede [registrar](/es/protocol/records/)
  diferentes datos con múltiples fines (enlaces de sitios web, perfiles de redes sociales, carteras de criptomonedas,
  etc.). Esto permitirá a los usuarios construir _Servicios de Identidad Digital_ sobre el protocolo.

## Mejoras técnicas

**El programa SUNS** es una versión en blockchain del
protocolo [DNS](https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio) utilizado para navegar por Internet. No se
trata de una simple sustitución, sino de una versión muy mejorada. Algunas de sus principales características son:

- **Descentralización**: el protocolo funcionará sobre la blockchain de Solana, por lo que no habrá ninguna autoridad
  central (adiós ICANN). Además, cada padre tendrá derecho a gestionar a sus hijos directos.

- **Modelo de suscripciones**: los suris pagarán a sus padres para mantenerse activos mediante el pago de una
  suscripción.

- **Soporte avanzado para protocolos**: DNS solo soporta algunos protocolos estándar, como IPv4 (registro A), Email (
  registro MX), etc. Por el contrario, el **Programa SUNS** soportará algunos protocolos incorporados pero cualquiera
  puede añadir soporte para cualquier otro protocolo en cualquier momento sin restricciones.

  Esto permite que los suris sean mapeados a carteras de cualquier blockchain, sitios web, redes sociales, etc. Por lo
  tanto, permite el uso de suris como un servicio de identidad digital.

- **Enrutamiento completo**: olvídate de los proxys. El algoritmo de resolución del **programa SUNS** permitirá el
  enrutamiento a diferentes servicios en diferentes puertos de la misma máquina sin tener que redireccionar mediante un
  proxy inverso.

- **Equilibrio de carga (load balancing)**: el protocolo tendrá soporte incorporado para algunos algoritmos de
  distribución de carga entre diferentes servidores. Evitando la necesidad de pagar costosos servicios para ello.

## Casos de uso

- **Servicio de identidad**: los suris podrán almacenar cualquier tipo de información. Esto, junto con la criptografía
  dará a los usuarios la capacidad de almacenar información privada en la blockchain que puede ser verificada por
  cualquier persona utilizando algoritmos como [ZK-proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof).

- **Marca**: los usuarios podrán utilizar suris [TLD](https://es.wikipedia.org/wiki/Dominio_de_nivel_superior)
  como `miNombreDeMarca`  o `@miNombre` para sus identidades personales o profesionales, de modo que sus clientes y
  proveedores, amigos, familiares o quien quiera ponerse en contacto con ellos no tendrá que recordar si su dominio
  es `.com`, `.org` o cualquiera de los muchos dominios existentes. En su lugar, solo tendrán que recordar el **nombre**
  . De esta forma se enfatiza lo que es realmente importante, la identidad, olvidándose de las terminaciones inútiles y
  sin sentido de los dominios web2.

  ::: note Más info
  Imagínese una empresa llamada "Fake Company, LTD", que está presente en varios países, como Reino Unido, Estados
  Unidos y Australia. En lugar de necesitar los dominios `fakecompany.co.uk`, `fakecompany.us`, `fakecompany.au`, solo
  necesitarán el **suri** `fakecompany`
  :::

- **Información social globalizada**: con solo actualizar sus suris, los usuarios pueden actualizar su identidad
  corporativa y/o su identidad en redes sociales debido a la centralización de los datos en los suris.

- **Autorización on-chain**: los sitios web, las redes sociales o cualquier servicio pueden integrarse con
  el **Programa SUNS** para permitir que sus usuarios se registren en sus sistemas con sus suris. Estos
  servicios pueden incluir alguna información en el suri para definir que el usuario está autorizado a utilizar sus
  sistemas, por lo que el usuario solo tiene que probar la propiedad del suri para volver a iniciar sesión.

- **Balanceador de carga de servicios**: gracias al soporte incorporado para los algoritmos de balanceo de carga, los
  usuarios podrán poner sus servidores detrás de un suri en lugar de pagar costosos servicios para realizar esa tarea.

- **Servir múltiples sitios web en la misma máquina**: actualmente necesitamos usar proxys inversos para servir
  múltiples sitios web en la misma máquina. Con el **Programa SUNS** esto será posible sin necesidad de un reverse
  proxy.

  ::: note Más info
  Esta característica no se limitará a los sitios web, sino que funcionará para cualquier protocolo/servicio.
  :::

- **Modelos de suscripción**: las empresas pueden desplegar modelos de suscripción dando a sus usuarios un sub suri (por
  ejemplo  `netflix.subs.111`) para cobrarles por sus servicios utilizando el modelo de suscripción incorporado. En
  cuanto el usuario deja de pagar o el suri expira, la suscripción se considera terminada, y esto puede reflejarse con
  una limitación de acceso al servicio ofrecido por la plataforma.

Estas ideas son solo el principio, cualquiera es libre de usar y construir sobre el **Programa SUNS** de la forma que
desee.

No dudes en unirte a nosotros en [Discord](https://discord.gg/YdutySHbbk) para contarnos nuevas ideas y casos de uso.