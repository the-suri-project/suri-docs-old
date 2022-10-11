# Dominios Suri

Los dominios Suri, o simplemente, suris, son la base del proyecto. Se construyen jerárquicamente: los padres gestionan a sus
hijos. La raíz del árbol es el dominio suri raíz `.` y, a partir de la raíz, cada padre puede tener múltiples hijos.


```:no-line-numbers
                    .
            ┌───────┴────────┐
           com              suri
     ┌──────┘        ┌───────┴───────┐
  com.solana     suri.domains    suri.docs
```

Los dominios suri se pueden utilizar para representar una entidad en la internet de Web3, por ejemplo, un usuario, un proyecto, una colección, un sitio web, o cualquier otra aplicación que los usuarios encuentren. Dentro de un dominio suri, el propietario puede crear dominios hijos para su uso personal, o revenderlos a su discreción.

Aquí hay un ejemplo de caso de uso con una marca llamada _Fakebook_, con varios casos de uso como una página web corporativa,
versiones localizadas y una página de perfil de suscripción:



|                                 |              Web2 - DNS               |          Web3 - SURI           |
|---------------------------------|:-------------------------------------:|:------------------------------:|
| Dominio padre / Página general  |             fakebook.com              |            fakebook            |
| Página específica país          | es.fakebook.com <br/> fr.fakebook.com | fakebook.es <br/>  fakebook.fr |
| Página de un cliente de facebook|      fancycola.subs.fakebook.com      |    facebook.subs.fancycola     |