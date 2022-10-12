# Suris etiquetados

Los suris etiquetados constan de un prefijo que denota un significado especial y una lista de nombres separados por
puntos `.`, por ejemplo, `@myUserName.twitter`, `#subject`, `$USDC`, etc.

::: note Más info
Los dominios etiquetados son solo una representación especial de un suri canónico equivalente, por lo que no tienen
ningún significado especial para el sistema o funcionalidades añadidas específicamente incorporadas para ellos.
:::

La idea detrás de esta representación es ***enfatizar una identidad o un tema***, que es más relevante que el resto
del suri. Esto es especialmente útil para los suris que pertenecen a usuarios o marcas.

Algunos ejemplos son:

- Si queremos utilizar un suri como fuente de nuestra identidad digital, podemos utilizar una
  _mención_ `@nombredeusuario` y luego utilizar subdominios para dividir el contenido para nuestras redes sociales, por
  ejemplo `@nombredeusuario.twitter`, `@nombredeusuario.facebook`, etc. Podríamos haber utilizado un [TLD], como por
  ejemplo `nombredeusuario`, pero de esta manera estamos enfatizando que somos una persona y no una proyecto, por
  ejemplo.

- Un proyecto Web3 está haciendo minting un nuevo token y exponiendo sus datos usando un _cashtag_ `$MI_TOKEN`. Quieren
  almacenar su información pública, como dónde comprarlo, el sitio web del proyecto, etc. en los registros del suri,
  pero almacenando la información de precios en `$MY_TOKEN.pricing` para separar los conceptos, utilizando el suri como
  una especie de oráculo. Con el prefijo `$` tenemos claro que se trata de un token y no de una marca o usuario.

Si en lugar de utilizar un suri etiquetado utilizamos un suri normal, habríamos terminado con `nombredeusuario.twitter`
o `MY_TOKEN.pricing`, que están perfectamente bien pero no enfatizan el tema real de la acción.

Puedes consultar la [definición](/es/domains/formats#tagged-format) completa y todos los tipos etiquetados en la
siguiente sección.

Como nota final, hay que tener en cuenta que gracias a la tecnología del protocolo [SUNS], los usuarios pueden almacenar
su información pública como parte de un suri, pudiendo ser utilizados para realizar actualizaciones simultáneas en
diferentes servicios como los perfiles de las redes sociales. Por supuesto, esta función también se incluye para los
suris etiquetados.

[TLD]: https://es.wikipedia.org/wiki/Dominio_de_nivel_superior

[SUNS]: /es/protocol/