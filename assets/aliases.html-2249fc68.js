import{_ as a,O as i,P as r,Q as o,$ as e,a0 as s,a2 as n,F as l}from"./framework-6e4ab73c.js";const d={},p=o("h1",{id:"protocolo-alias",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#protocolo-alias","aria-hidden":"true"},"#"),e(" Protocolo Alias")],-1),c=o("em",null,"Alias",-1),u=o("code",null,"CNAME",-1),h={href:"https://es.wikipedia.org/wiki/Domain_Name_System",target:"_blank",rel:"noopener noreferrer"},m=n(`<table><thead><tr><th>Name</th><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td>Alias</td><td><code>alias(EXACT_QUERY)</code></td><td>Un alias a otro registro en el mismo suri</td></tr><tr><td>Remote Alias</td><td><code>alias(SURI_ADDRESS, EXACT_QUERY)</code></td><td>Un alias a otro registro en otro suri</td></tr></tbody></table><p>El argumento <code>EXACT_QUERY</code> define la firma a buscar en el suri de destino. Esa firma interna es parte de la firma del registro que la contiene, por lo que la firma del registro es la suma de los protocol internos y externos al protocolo <code>alias</code> sin contarle a él:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>  Registro:    suri.domains:http+alias(tcp(80)+ipv4(127.0.0.1))
                            ──── ───── ───     ────
Protocolos:                 http+alias+tcp    +ipv4

     Firma: http+ipv4+tcp
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Más info</p><p><code>EXACT_QUERY</code> no puede contener otros protocolos <code>alias</code>.</p></div><h2 id="utilidades" tabindex="-1"><a class="header-anchor" href="#utilidades" aria-hidden="true">#</a> Utilidades</h2><p>Este protocolo puede usarse para definir complejas dependencias entre registros, por ejemplo, imagina que quieres definir la ruta a un sitio web que expone tu CV incluyendo tu foto. También quieres definir que esa foto sea tu foto de perfil para las redes sociales. En este caso, puedes definir dos registros absolutos como estos:</p><ul><li><strong>Sitio web</strong>: <code>http+tls+tcp(443)+ipv4(127.0.0.1)</code></li><li><strong>Image de perfil</strong>: <code>profile-pic+http(/path/to/picture.png)+tls+tcp(443)+ipv4(127.0.0.1)</code></li></ul><p>O bien, puedes definir un registro relativo de forma que si cambias la dirección de la web, no necesitas cambiar también la dirección de la imagen de perfil:</p><ul><li><strong>Sitio web</strong>: <code>http+tls+tcp(443)+ipv4(127.0.0.1)</code></li><li><strong>Image de perfil</strong>: <code>http(/path/to/log.png)+alias(http+tls+tcp+ipv4)</code></li></ul><div class="hint-container note"><p class="hint-container-title">Más info</p><p>Tenga en cuenta que el protocolo alias no es una redirección, sino una referencia a otro registro, por lo que los usuarios siempre verán la dirección del registro original.</p></div><h2 id="reemplazos" tabindex="-1"><a class="header-anchor" href="#reemplazos" aria-hidden="true">#</a> Reemplazos</h2><p>En el ejemplo anterior usamos el registro <code>http(/path/to/log.png)+alias(http+tls+tcp+ipv4)</code> para definir un alias al registro de la página web. Como puedes ver, hay dos definiciones del protocolo <code>http</code>. El interno especifica qué buscar en el registro de destino (sitio web), mientras que el externo especifica un reemplazo de forma que cuando el alias es resuelto, el <code>http</code> interno es reemplazado por el externo.</p><p>En el siguiente ejemplo puedes ver cómo definir reemplazos para algunos protocolos (HTTP, TCP) mientras se mantienen otros (IPv4):</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Registro original: origin.suri:http(/path/to/file)+tcp(95)+alias(TARGET_SURI_ADDRESS, http+tls+tcp+ipv4)
                                                                 ─┬─────────────────  ─┬────────────────
                         ┌────────────────────────────────────────┘   ┌────────────────┘
                   ──────┴──── ───────────────────────────────────────┴─
 Registro destino: target.suri:http(/another/path)+tcp(80)+ip(127.0.0.1)
                                                           ─────────────
   Registro final: origin.suri:http(/path/to/file)+tcp(95)+ip(127.0.0.1)
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Más info</p><p>El comportamiento de los reemplazos es sustituir por completo los protocolos internos por los externos, pero puede configurarse para ser diferente para cada protocol. Por ejemplo, los clientes pueden reemplazar los paths en <code>http</code> si el externo es absoluto o combinarlos si es relativo.</p></div>`,15);function g(f,_){const t=l("ExternalLinkIcon");return i(),r("div",null,[p,o("p",null,[e("El protocolo "),c,e(" es un protocolo especial que permite la búsqueda de parte o la totalidad del contenido de un registro en otro del mismo suri o de cualquier otro. Actúa de forma similar a un registro "),u,e(" en el protocolo "),o("a",h,[e("DNS"),s(t)]),e(".")]),m])}const b=a(d,[["render",g],["__file","aliases.html.vue"]]);export{b as default};