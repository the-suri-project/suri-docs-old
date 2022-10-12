# Protocolos de registro

Los registros se definen por el protocolo que se coloca en ellos y los argumentos de esos protocolos. Un registro puede
contener uno o más protocolos formando una pila de protocolos en la que el primer protocolo es el superior y el resto se
colocan debajo.

La definición de un sitio web requiere una dirección IP, un puerto TCP, el uso o no del protocolo TLS y el protocolo
HTTP, por lo que
se definiría como: `http+tls+tcp(443)+ipv4(0.0.0.0)`. Esto corresponde a la pila:

```:no-line-numbers
3. [Application level] http
2.   [Transport level] tls
2.   [Transport level] tcp(443)
1.     [Network level] ipv4(0.0.0.0)
```

En la [siguiente sección](/es/protocol/records/protocols/standard) puedes encontrar la lista de protocolos con soporte
nativo en **Suri** pero cualquiera puede usar cualquier protocolo personalizado y combinarlo con otros protocolos para
construir un registro personalizado.

Por ejemplo, las redes sociales pueden utilizar las siguientes pilas de protocolos para acceder a la información pública
de los usuarios:

- `profile+name+text(NOMBRE_USUARIO)` para el nombre.
- `profile+desc+text(DESCRIPCIÓN)` para la descripción.
- `profile+pic+http+tls+tcp(443)+dns(DOMINIO_DE_LA_FOTO)` para la foto de perfil.

Este tipo de composición abre, junto con el [algoritmo de búsqueda](/es/protocol/searching/), un amplio abanico de
posibilidades para incrementar los casos de uso de los suris.