<style>
td > code {
    white-space: nowrap;
}
</style>

# Protocolo Alias

El protocolo _Alias_ es un protocolo especial que permite la búsqueda de parte o la totalidad del contenido de un
registro en otro del mismo suri o de cualquier otro.
Actúa de forma similar a un registro `CNAME` en el protocolo [DNS].

| Name         | Pattern                            | Description                               |
|--------------|------------------------------------|-------------------------------------------|
| Alias        | `alias(EXACT_QUERY)`               | Un alias a otro registro en el mismo suri |
| Remote Alias | `alias(SURI_ADDRESS, EXACT_QUERY)` | Un alias a otro registro en otro suri     |

El argumento `EXACT_QUERY` define la firma a buscar en el suri de destino. Esa firma interna es parte de la firma del
registro que la contiene, por lo que la firma del registro es la suma de los protocol internos y externos al
protocolo `alias` sin contarle a él:

```:no-line-numbers
  Registro:    suri.domains:http+alias(tcp(80)+ipv4(127.0.0.1))
                            ──── ───── ───     ────
Protocolos:                 http+alias+tcp    +ipv4

     Firma: http+ipv4+tcp
```

::: note Más info
`EXACT_QUERY` no puede contener otros protocolos `alias`.
:::

## Utilidades

Este protocolo puede usarse para definir complejas dependencias entre registros, por ejemplo, imagina que quieres
definir la ruta a
un sitio web que expone tu CV incluyendo tu foto. También quieres definir que esa foto sea tu foto de perfil para las
redes
sociales. En este caso, puedes definir dos registros absolutos como estos:

- **Sitio web**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Image de perfil**: `profile-pic+http(/path/to/picture.png)+tls+tcp(443)+ipv4(127.0.0.1)`

O bien, puedes definir un registro relativo de forma que si cambias la dirección de la web, no necesitas cambiar también
la dirección de la imagen de perfil:

- **Sitio web**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Image de perfil**: `http(/path/to/log.png)+alias(http+tls+tcp+ipv4)`

::: note Más info
Tenga en cuenta que el protocolo alias no es una redirección, sino una referencia a otro registro, por lo que los
usuarios siempre verán la dirección del registro original.
:::

## Reemplazos

En el ejemplo anterior usamos el registro `http(/path/to/log.png)+alias(http+tls+tcp+ipv4)` para definir un alias al
registro de la página web. Como puedes ver, hay dos definiciones del protocolo `http`. El interno especifica qué buscar
en el registro de destino (sitio web), mientras que el externo especifica un reemplazo de forma que cuando el alias es
resuelto, el `http` interno es reemplazado por el externo.

En el siguiente ejemplo puedes ver cómo definir reemplazos para algunos protocolos (HTTP, TCP) mientras se mantienen
otros (IPv4):

```:no-line-numbers
Registro original: origin.suri:http(/path/to/file)+tcp(95)+alias(TARGET_SURI_ADDRESS, http+tls+tcp+ipv4)
                                                                 ─┬─────────────────  ─┬────────────────
                         ┌────────────────────────────────────────┘   ┌────────────────┘
                   ──────┴──── ───────────────────────────────────────┴─
 Registro destino: target.suri:http(/another/path)+tcp(80)+ip(127.0.0.1)
                                                           ─────────────
   Registro final: origin.suri:http(/path/to/file)+tcp(95)+ip(127.0.0.1)
```

::: note Más info
El comportamiento de los reemplazos es sustituir por completo los protocolos internos por los externos, pero puede
configurarse para ser diferente para cada protocol. Por ejemplo, los clientes pueden reemplazar los paths en `http` si
el externo es absoluto o combinarlos si es relativo.
:::

[DNS]: https://es.wikipedia.org/wiki/Domain_Name_System