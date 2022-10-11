# Suris etiquetados

Los suris etiquetados constan de un prefijo que denota un significado especial y una lista de nombres de suri separados por un punto `.`,
por ejemplo, `@myUserName.twitter`, `#subject`, `$USDC`, etc.

::: note Insight
Los dominios etiquetados son sólo una representación especial de un suri canónico equivalente, por lo que no tienen ningún
significado especial para el sistema o funcionalidades añadidas específicamente incorporadas.
:::

La idea detrás de esta representación es ***enfatizar una identidad o un tema***, que es más relevante que el resto
del suri. Esto es especialmente útil para los suris que pertenecen a usuarios o marcas.

Algunos ejemplos son:

- Si queremos utilizar un suri como fuente de nuestra identidad digital, podemos utilizar una _mención_ `@nombredeusuario` y luego utilizar subdominios para dividir el contenido para nuestras redes sociales, por ejemplo `@nombredeusuario` `@nombredeusuario.facebook`, etc. Podríamos haber utilizado un [TLD], como por ejemplo `nombredeusuario`, pero de esta manera estamos enfatizando que somos una persona y no una marca.

- Un proyecto Web3 está acuñando un nuevo token y exponiendo sus datos usando un _cashtag_ `$MY_TOKEN`. Quieren almacenar su
  información pública, como dónde comprarlo, el sitio web del proyecto, etc. en los registros del suri, pero almacenando la información de precios en `$MY_TOKEN`. en `$MY_TOKEN.pricing` para separar los conceptos, utilizando el suri como una especie de oráculo. Con el prefijo `$` tenemos claro que se trata de un token y no de una marca o usuario.

Si en lugar de utilizar un suri etiquetado utilizamos un suri normal, habríamos terminado con `nombredeusuario.twitter`
o `MY_TOKEN.pricing`, que están perfectamente bien pero no enfatizan el tema real de la acción.

Puedes consultar la [definición] completa (/es/domains/formats#tagged-format) y todos los tipos etiquetados en la siguiente sección.

Como nota final, ten en cuenta que gracias a la tecnología del protocolo SUNS (Solana on-chain) los usuarios pueden almacenar su información pública como parte de un suri, que puede ser utilizado para realizar actualizaciones simultáneas en todos los perfiles de las redes sociales.
Por supuesto, esta función también se incluye para los suris etiquetados.