# Formatos de dominio Suri

Los Suris se definen mediante una serie de nombres separados por puntos `.`. Esos nombres se llaman _nombres de nivel_
porque cada uno de ellos pertenecen a un nivel específico, siendo el más a la izquierda el nivel más alto.

```:no-line-numbers
   Específico
+ ────────────► -
suri.domains.docs
─┬── ─┬───── ─┬──
 │    │       └► 3er nivel
 │    └► 2do nivel
 └► 1er nivel
```

::: note Más info
Esto funciona en el orden inverso a los actuales dominios de DNS, donde el nivel más profundo se escribe primero. Por
ejemplo, el dominio DNS dominio `docs.suri.domains` se escribiría como `domains.suri.docs` en **Suri**.
:::

El nivel de un suri completo es igual al _nombre de nivel_ más específico, o al recuento de nombres. En el ejemplo
anterior ejemplo, el suri `suri.domains.docs` tiene un nivel de 3.

Cuando un Suri tiene un nivel de 1, se llama suri **TLD** o suri de primer nivel.

## Formato canónico

En el formato canónico, los nombres de nivel se escriben empezando por el nivel más alto a la izquierda, hasta el
más bajo a la derecha siendo cada nivel seguido de un punto `.` excepto el último.

- `.` - raíz
- `com`
- `dominios`
- `suri.domains`
- `suri.domains.docs`

::: details Definición formal

```:no-line-numbers
<canonical_suri> := <root> | <suri>
          <root> := '.'
          <suri> := <name> ('.' <name>)*
          <name> := <name_char>+ ("-"+ <name_char>+)*
     <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::

## Formato etiquetado

Por último, los formatos etiquetados consisten en un suri prefijado por un símbolo, llamado etiqueta (tag en inglés),
que les da un significado extra. El formato etiquetado tiene una versión equivalente en el formato canónico, por lo que
se puede utilizar cualquiera de los dos para hacer referencia al suri. Las etiquetas disponibles son:

| Nombre                     | Símbolo | Forma etiquetada | Forma canónica        |
|----------------------------|:-------:|------------------|-----------------------|
| Mención<br>(Mention)       |    @    | `@<suri>`        | `tag.mention.<suri>`  |
| Tema<br>(Hash / Hashtag)   |    #    | `#<suri>`        | `tag.hash.<suri>`     |
| Dinero<br>(Cash / Cashtag) |    $    | `$<suri>`        | `tag.cash.<suri>`     |
| Ancla<br>(Anchor)          |    &    | `&<suri>`        | `tag.anchor.<suri>`   |
| Alerta<br>(Alert)          |    !    | `!<suri>`        | `tag.alert.<suri>`    |
| Pregunta<br>(Question)     |    ?    | `?<suri>`        | `tag.question.<suri>` |

Por ejemplo:

- `@miUsuario.twitter` is equivalent to `tag.mention.miUsuario.twitter`.

::: details Definición formal

```:no-line-numbers
<tagged_suri> := <tag> <suri>
        <tag> := one of [@#$&!?₿⧫◎]
       <suri> := <name> ('.' <name>)*
       <name> := <name_char>+ ("-"+ <name_char>+)*
  <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::