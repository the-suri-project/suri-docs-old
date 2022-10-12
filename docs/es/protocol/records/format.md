# Formato de los registros

Los registros solo tienen un formato canónico para sus definiciones, que consiste en un suri en
su [formato canónico](/es/domains/formats#canonical-format) seguido de dos puntos `:` y una pila de protocolos junto con
sus argumentos:

```:no-line-numbers
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
─┬────────── ─┬──────────────────────────
 └►Suri       └►Pila de protocolos
```

Los protocolos se expresan indicando primero el nivel más alto para facilitar el proceso de búsqueda. Además, cada
protocolo va seguido de un argumento opcional entre paréntesis en caso de que el protocolo lo necesite.

```:no-line-numbers
                   Protocol level
             + ───────────────────────► -
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
             ─┬──         ─┬─────────────
              │            └► Protocolo con argumento
              └─► Protocolo sin argumento
```

::: details Definición formal

```:no-line-numbers
<canonical_record> := <canonical_suri> ':' <protocol_list>
   <protocol_list> := <protocol> ('<' <protocol>)*
        <protocol> := <protocol_name> <protocol_arg>?
   <protocol_name> := <name_char>+ ([-+] <name_char>+)*
       <name_char> := <unicode_xid_body> | <unicode_number>
    <protocol_arg> := '(' <escaped_text> ')'
    <escaped_text> := (<any char but [\n\r\t\s\\\)\|]> | <escape>)+
          <escape> := '\\' [\\nrts\)\|]
```

:::

::: warning
Los argumentos vacíos no están permitidos. Por ejemplo, `suri:protocol()` no es una
definición de registro válida.
:::

::: note Más info
El valor final de un registro es el resultado de combinar el valor de cada protocolo dentro del registro.
:::

## Firma

Todos los registros tienen una firma que permite identificarlos y clasificarlos. La firma es la lista de nombres de
protocolo
sin argumentos.

```:no-line-numbers
Registro:    suri.domains:http<tcp(80)<ipv4(127.0.0.1)
                          ──── ───     ────
   Firma:                 http<tcp    <ipv4
```

::: note Más info
La firma no tiene que ser única.
:::