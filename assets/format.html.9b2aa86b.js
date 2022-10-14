import{_ as o,o as e,c as t,e as a}from"./app.e6540cbf.js";const s={},n=a(`<h1 id="formato-de-los-registros" tabindex="-1"><a class="header-anchor" href="#formato-de-los-registros" aria-hidden="true">#</a> Formato de los registros</h1><p>Los registros solo tienen un formato can\xF3nico para sus definiciones, que consiste en un suri en su <a href="/es/domains/formats#canonical-format">formato can\xF3nico</a> seguido de dos puntos <code>:</code> y una lista de protocolos junto con sus argumentos:</p><div class="language-text ext-text"><pre class="language-text"><code>suri.domains:http+tcp(80)+ipv4(127.0.0.1)
\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 \u2514\u25BASuri       \u2514\u25BAPila de protocolos
</code></pre></div><p>Los protocolos se pueden expresar en cualquier orden pero la forma oficial es ordenados alfab\xE9ticamente. En el ejemplo anterior, el suri fue escrito como si fuera una pila de protocolos de red.</p><p>Adem\xE1s, cada protocolo va seguido de un argumento opcional entre par\xE9ntesis en caso de que el protocolo lo necesite.</p><div class="language-text ext-text"><pre class="language-text"><code>                   Protocol level
             + \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25BA -
suri.domains:http+tcp(80)+ipv4(127.0.0.1)
             \u2500\u252C\u2500\u2500         \u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
              \u2502            \u2514\u25BA Protocolo con argumento
              \u2514\u2500\u25BA Protocolo sin argumento
</code></pre></div><details class="custom-container details"><summary>Definici\xF3n formal</summary><div class="language-text ext-text"><pre class="language-text"><code>&lt;canonical_record&gt; := &lt;canonical_suri&gt; &#39;:&#39; &lt;protocol_list&gt;
   &lt;protocol_list&gt; := &lt;protocol&gt; (&#39;+&#39; &lt;protocol&gt;)*
        &lt;protocol&gt; := &lt;protocol_name&gt; &lt;protocol_arg&gt;?
   &lt;protocol_name&gt; := &lt;name_char&gt;+ (&quot;-&quot; &lt;name_char&gt;+)*
       &lt;name_char&gt; := &lt;unicode_xid_body&gt; | &lt;unicode_number&gt;
    &lt;protocol_arg&gt; := &#39;(&#39; &lt;escaped_text&gt; &#39;)&#39;
    &lt;escaped_text&gt; := (&lt;any char but [\\n\\r\\t\\s\\\\\\)\\|]&gt; | &lt;escape&gt;)+
          &lt;escape&gt; := &#39;\\\\&#39; [\\\\nrts\\)\\|]
</code></pre></div></details><div class="custom-container warning"><p class="custom-container-title">Aviso</p><p>Los argumentos vac\xEDos no est\xE1n permitidos. Por ejemplo, <code>suri:protocol()</code> no es una definici\xF3n de registro v\xE1lida.</p></div><div class="custom-container note"><p class="custom-container-title">M\xE1s info</p><p>El valor final de un registro es el resultado de combinar el valor de cada protocolo dentro del registro.</p></div><h2 id="firma" tabindex="-1"><a class="header-anchor" href="#firma" aria-hidden="true">#</a> Firma</h2><p>Todos los registros tienen una firma que permite identificarlos y clasificarlos. La firma es la lista de nombres de protocolo sin argumentos.</p><div class="language-text ext-text"><pre class="language-text"><code>Registro:    suri.domains:http+tcp(80)+ipv4(127.0.0.1)
                          \u2500\u2500\u2500\u2500 \u2500\u2500\u2500     \u2500\u2500\u2500\u2500
   Firma:                 http+tcp    +ipv4
</code></pre></div><div class="custom-container note"><p class="custom-container-title">M\xE1s info</p><p>La firma no tiene que ser \xFAnica.</p></div>`,13),r=[n];function i(c,l){return e(),t("div",null,r)}const p=o(s,[["render",i],["__file","format.html.vue"]]);export{p as default};
