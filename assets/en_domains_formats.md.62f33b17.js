import{_ as e,o as a,c as s,d as t}from"./app.e832b235.js";const g=JSON.parse('{"title":"Suri Domain Formats","description":"","frontmatter":{},"headers":[{"level":2,"title":"Canonical format","slug":"canonical-format","link":"#canonical-format","children":[]},{"level":2,"title":"Standard format","slug":"standard-format","link":"#standard-format","children":[]},{"level":2,"title":"Tagged format","slug":"tagged-format","link":"#tagged-format","children":[]}],"relativePath":"en/domains/formats.md"}'),o={name:"en/domains/formats.md"},n=t(`<h1 id="suri-domain-formats" tabindex="-1">Suri Domain Formats <a class="header-anchor" href="#suri-domain-formats" aria-hidden="true">#</a></h1><p>The Suris are defined by a series of names separated by dots <code>.</code>. Those names are called <em>level entries</em> because each of them belongs to a specific level, starting the count from the last one.</p><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">   Specificity  </span></span>
<span class="line"><span style="color:#A6ACCD;">+ \u25C4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -</span></span>
<span class="line"><span style="color:#A6ACCD;">docs.suri.domains</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2500\u252C\u2500\u2500 \u2500\u252C\u2500\u2500 \u2500\u252C\u2500\u2500\u2500\u2500\u2500</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u2502    \u2514\u25BA 1st level</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u2514\u25BA 2nd level</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2514\u25BA 3rd level</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The level of a whole Suri is equal to the most specific level entry, i.e. the count of level entries. In the previous example, the Suri <code>www.suri.domains</code> has a level of 3.</p><p>When a Suri has a level of 1, it is called <strong>TLS</strong> or <em>Top Level Suri</em> the same way <strong>TLD</strong> or <em>Top Level Domain</em> is used for web2 domains.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>The root Suri is the only one that has level 0, and it&#39;s represented by a single dot <code>.</code></p></div><h2 id="canonical-format" tabindex="-1">Canonical format <a class="header-anchor" href="#canonical-format" aria-hidden="true">#</a></h2><p>The canonical format expresses the Suri level entries starting from the most specific to the least one (left to right) being each level followed by a dot <code>.</code>.</p><ul><li><code>.</code> - root</li><li><code>com.</code></li><li><code>domains.</code></li><li><code>suri.domains.</code></li><li><code>docs.suri.domains.</code></li></ul><details class="details custom-block"><summary>Formal definition</summary><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;canonical_suri&gt; := &lt;level_entry&gt;+ | &#39;.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;level_entry&gt; := &lt;name&gt; &#39;.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;name&gt; := &lt;name_char&gt;+</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;name_char&gt; := &lt;unicode_xid_body&gt; | &lt;unicode_number&gt; | &lt;emoji_pictographic&gt; | &lt;emoji_component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="standard-format" tabindex="-1">Standard format <a class="header-anchor" href="#standard-format" aria-hidden="true">#</a></h2><p>The standard format is the same as the canonical but making the final dot <code>&#39;.&#39;</code> optional. This is the usual format used across the whole internet to express web2 domains.</p><ul><li><code>.</code> - root is equal to the canonical format.</li><li><code>suri.domains</code> becomes <code>suri.domains.</code> in the canonical format.</li><li><code>suri.domains.</code> is equal to the canonical format.</li></ul><details class="details custom-block"><summary>Formal definition</summary><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Format:</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;standard_suri&gt; := (&lt;name&gt; &lt;level_entry&gt;*)? &#39;.&#39;?</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;level_entry&gt; := &#39;.&#39; &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;name&gt; := &lt;name_char&gt;+</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;name_char&gt; := &lt;unicode_xid_body&gt; | &lt;unicode_number&gt; | &lt;emoji_pictographic&gt; | &lt;emoji_component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="tagged-format" tabindex="-1">Tagged format <a class="header-anchor" href="#tagged-format" aria-hidden="true">#</a></h2><p>Finally, a specific set of Suris can be expressed in the tagged format. This format consist in reversing the Suri, remove the initial 2 levels and add a symbol as prefix. There rules can only be applied to:</p><ul><li><code>&lt;suri&gt;.mention.tag</code> whose symbols is <code>@</code> and results in <code>@&lt;reversed_suri&gt;</code>. This is normally known as <em>mention</em> in social networks.</li><li><code>&lt;suri&gt;.hash.tag</code> whose symbols is <code>#</code> and results in <code>#&lt;reversed_suri&gt;</code>. This is normally known as <em>hashtag</em> in social networks.</li><li><code>&lt;suri&gt;.anchor.tag</code> whose symbols is <code>&amp;</code> and results in <code>&amp;&lt;reversed_suri&gt;</code>.</li><li><code>&lt;suri&gt;.cash.tag</code> whose symbols is <code>$</code> and results in <code>$&lt;reversed_suri&gt;</code>. This is normally known as <em>cashtag</em> in social <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>.</li><li><code>&lt;suri&gt;.alert.tag</code> whose symbols is <code>!</code> and results in <code>!&lt;reversed_suri&gt;</code>.</li><li><code>&lt;suri&gt;.question.tag</code> whose symbols is <code>?</code> and results in <code>?&lt;reversed_suri&gt;</code>.</li></ul><p>The reason to reverse the Suri is that in standard Suris we want to emphasize the most specific entry level due to it is the focus of our action. In the Suri <code>docs.suri.domains</code> we want to emphasize the <code>docs</code> part because that is the place we want to navigate to.</p><p>However, in the tagged format we want to emphasize the least specific entry level because that one represents the topic of the action. For example, for <code>@suri.docs</code> we emphasize the <code>suri</code> entry level which is the digital identity of the <code>docs</code> section we want to access. This method improves the readability of Suris and emphasizes the digital identity behind services.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>The level of a tagged Suri is always 2 + the number of level entries.</p></div><p>Examples:</p><ul><li><code>@a.b.c</code> becomes <code>c.b.a.mention.tag.</code> in the canonical format.</li><li><code>#a.b.c</code> becomes <code>c.b.a.hash.tag.</code> in the canonical format.</li><li><code>&amp;a.b.c</code> becomes <code>c.b.a.anchor.tag.</code> in the canonical format.</li><li><code>$a.b.c</code> becomes <code>c.b.a.cash.tag.</code> in the canonical format.</li><li><code>!a.b.c</code> becomes <code>c.b.a.alert.tag.</code> in the canonical format.</li><li><code>?a.b.c</code> becomes <code>c.b.a.question.tag.</code> in the canonical format.</li></ul><details class="details custom-block"><summary>Formal definition</summary><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;tagged_suri&gt; := &lt;symbol&gt; &lt;name&gt; &lt;level_entry&gt;*</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;symbol&gt; := one of [@#&amp;$+-*]</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;level_entry&gt; := &#39;.&#39; &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;name&gt; := &lt;name_char&gt;+</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;name_char&gt; := &lt;unicode_xid_body&gt; | &lt;unicode_number&gt; | &lt;emoji_pictographic&gt; | &lt;emoji_component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details>`,23),l=[n];function i(c,r,d,p,m,h){return a(),s("div",null,l)}const f=e(o,[["render",i]]);export{g as __pageData,f as default};
