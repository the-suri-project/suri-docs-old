import{_ as e,O as t,P as o,a2 as a}from"./framework-6e4ab73c.js";const n={},r=a(`<h1 id="formato-de-los-registros" tabindex="-1"><a class="header-anchor" href="#formato-de-los-registros" aria-hidden="true">#</a> Formato de los registros</h1><p>Los registros solo tienen un formato canónico para sus definiciones, que consiste en un suri en su <a href="/es/domains/formats#canonical-format">formato canónico</a> seguido de dos puntos <code>:</code> y una lista de protocolos junto con sus argumentos:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>suri.domains:http+tcp(80)+ipv4(127.0.0.1)
─┬────────── ─┬──────────────────────────
 └►Suri       └►Pila de protocolos
</code></pre></div><p>Los protocolos se pueden expresar en cualquier orden pero la forma oficial es ordenados alfabéticamente. En el ejemplo anterior, el suri fue escrito como si fuera una pila de protocolos de red.</p><p>Además, cada protocolo va seguido de un argumento opcional entre paréntesis en caso de que el protocolo lo necesite.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>                   Protocol level
             + ───────────────────────► -
suri.domains:http+tcp(80)+ipv4(127.0.0.1)
             ─┬──         ─┬─────────────
              │            └► Protocolo con argumento
              └─► Protocolo sin argumento
</code></pre></div><details class="hint-container details"><summary>Definición formal</summary><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;canonical_record&gt; := &lt;canonical_suri&gt; &#39;:&#39; &lt;protocol_list&gt;
   &lt;protocol_list&gt; := &lt;protocol&gt; (&#39;+&#39; &lt;protocol&gt;)*
        &lt;protocol&gt; := &lt;protocol_name&gt; &lt;protocol_arg&gt;?
   &lt;protocol_name&gt; := &lt;name_char&gt;+ (&quot;-&quot; &lt;name_char&gt;+)*
       &lt;name_char&gt; := &lt;unicode_xid_body&gt; | &lt;unicode_number&gt;
    &lt;protocol_arg&gt; := &#39;(&#39; &lt;escaped_text&gt; &#39;)&#39;
    &lt;escaped_text&gt; := (&lt;any char but [\\n\\r\\t\\s\\\\\\)\\|]&gt; | &lt;escape&gt;)+
          &lt;escape&gt; := &#39;\\\\&#39; [\\\\nrts\\)\\|]
</code></pre></div></details><div class="hint-container warning"><p class="hint-container-title">Aviso</p><p>Los argumentos vacíos no están permitidos. Por ejemplo, <code>suri:protocol()</code> no es una definición de registro válida.</p></div><div class="hint-container note"><p class="hint-container-title">Más info</p><p>El valor final de un registro es el resultado de combinar el valor de cada protocolo dentro del registro.</p></div><h2 id="firma" tabindex="-1"><a class="header-anchor" href="#firma" aria-hidden="true">#</a> Firma</h2><p>Todos los registros tienen una firma que permite identificarlos y clasificarlos. La firma es la lista de nombres de protocolo sin argumentos.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Registro:    suri.domains:http+tcp(80)+ipv4(127.0.0.1)
                          ──── ───     ────
   Firma:                 http+tcp    +ipv4
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Más info</p><p>La firma no tiene que ser única.</p></div>`,13),s=[r];function i(l,c){return t(),o("div",null,s)}const p=e(n,[["render",i],["__file","format.html.vue"]]);export{p as default};
