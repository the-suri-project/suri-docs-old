# Dominios de primer nivel (TLDs)

Los dominios de nivel superior son los nombres más genéricos de un suri, por ejemplo el TLD de `suri.domains` es `suri`.
En Web2 los TLD están regidos por la [ICANN](https://www.icann.org/) o por grandes empresas y tienen una utilidad muy
limitada.

::: note Más info
**Suri** liberaliza los TLDs, permitiendo a los usuarios adquirir cualquier TLD que deseen, no teniendo que utilizar
un subdominio.
:::

Permitir a la gente comprar TLDs da a **Suri** una reducción del número de subdominios necesarios, así que para un
dominio Web2 como `docs.mywebsite.com` solo necesitaríamos `docs.mywebsite`. Esta reducción nos permite invertir la
forma en que se escriben los dominios, colocando así el TLD al principio del dominio en lugar de al final, enfatizando
la identidad a la que nos referimos y luego la información extra, en forma de subdominios.

Por ejemplo, imaginemos que tenemos una empresa "Fake Company, LTD", que está presente en varios países con diferentes
idiomas. Nuestra empresa expone una landing para presentar la empresa y sus productos, un blog para compartir noticias y
una web de documentación para ayudar a los usuarios. En Web2 podríamos tener una estructura como

- `fakecompany.com` - landing en inglés
    - `blog.fakecompany.com` - blog en inglés
    - `docs.fakecompany.com` - documentación en inglés
- `fakecompany.es` - landing en español
    - `blog.fakecompany.es` - blog en español
    - `docs.fakecompany.es` - documentación en español

Esta estructura impone a nuestra empresa comprar `fakecompany.com` y `fakecompany.es` y luego crear subdominios para sus
servicios internos. Con **Suri** tendremos una estructura como:

- `fakecompany` - landing en inglés
    - `fakecompany.blog` - blog en inglés
    - `fakecompany.docs` - documentación en inglés
- `fakecompany.es` - landing en español
    - `fakecompany.es.blog` - blog en español
    - `fakecompany.es.docs` - documentación en español

Todo está dentro de nuestro suri principal `fakecompany`, que representa nuestra identidad, por lo que cualquiera puede
escribir directamente nuestro nombre para acceder a nuestra web por defecto (inglés) o localizarla fácilmente añadiendo
el código del país.

Como solo necesitamos `fakecompany` no necesitamos comprar `fakecompany.com`, `fakecompany.es` y todas las demás
posibilidades.

Por último, pero no por ello menos importante, siempre estamos enfatizando nuestra identidad, porque es lo que el
usuario escribe y lee primero.