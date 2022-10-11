# Formatos de dominio Suri

Los Suris se definen mediante una serie de nombres separados por puntos `.`. Esos nombres se llaman _entradas de nivel_ porque cada uno de
pertenecen a un nivel específico, siendo el más a la izquierda el nivel más alto.

```:no-line-numbers
   Específico
+ ────────────► -
suri.domains.docs
─┬── ─┬───── ─┬──
 │    │       └► 3er nivel
 │    └► 2do nivel
 └► 1er nivel
```

::: note Insight
Esto funciona en el orden inverso de la jerarquía DNS, donde el nivel más profundo se escribe primero. Por ejemplo, el dominio DNS
dominio `docs.suri.domains` se escribiría como `domains.suri.docs` en suri.
:::

El nivel de un Suri completo es igual a la entrada de nivel más específica, o al recuento de entradas de nivel. En el ejemplo anterior
ejemplo, el Suri `suri.dominios.docs` tiene un nivel de 3.

Cuando un Suri tiene un nivel de 1, se llama **TLD** suri o _Top Level Domain_ suri.

## Formato canónico

En el formato canónico, las entradas de nivel Suri se muestran empezando por el nivel más alto a la izquierda, hasta el más bajo a la
derecha siendo cada nivel seguido de un punto `.` excepto el último.

- `.` - raíz
- `com`
- `dominios`
- `suri.dominios`
- `suri.dominios.docs`

::: details Definición formal

```:no-line-numbers
<canonical_suri> := <root> | <suri>
          <root> := '.'
          <suri> := <name> ('.' <name>)*
          <name> := <name_char>+
     <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::


## Formato etiquetado

Por último, los formatos etiquetados consisten en un suri prefijado por un símbolo, llamado tag, que les da un significado extra. El formato etiquetado tiene una versión equivalente en el formato canónico, por lo que se puede utilizar cualquiera de los dos para hacer referencia al suri. Las etiquetas disponibles son:


| Nombre         | Símbolo| Forma etiquetada | Forma canónica        |
|----------------|:------:|-------------|-----------------------|
| Mention        |   @    | `@<suri>`   | `tag.mention.<suri>`  |
| Hash / Hashtag |   #    | `#<suri>`   | `tag.hash.<suri>`     |
| Cash / Cashtag |   $    | `$<suri>`   | `tag.cash.<suri>`     |
| Anchor         |   &    | `&<suri>`   | `tag.anchor.<suri>`   |
| Alert          |   !    | `!<suri>`   | `tag.alert.<suri>`    |
| Question       |   ?    | `?<suri>`   | `tag.question.<suri>` |

Por ejemplo: `@miUsuario.twitter` is equivalent to `tag.mention.miUsuario.twitter`.

::: details Definición formal

```:no-line-numbers
<tagged_suri> := <tag> <suri>
        <tag> := one of [@#&$+-*]
       <suri> := <name> ('.' <name>)*
       <name> := <name_char>+
  <name_char> := "-" | "◎" | <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::