# Top Level Domains (TLD)

Top Level Domains are the most generic names in a suri, for example the TLD of `suri.domains` is `suri`. In Web2 the TLD
are ruled by the [ICANN](https://www.icann.org/) or big companies and are very limited in their usability.

::: note Insight
**Suri** has liberated the TLDs, allowing users to acquire any TLD they want, not having to use a subdomain anymore.
:::

Allowing people to buy TLDs gives **Suri** a reduction of the number of subdomains needed, so for a Web2 domain
like `docs.mywebsite.com` we would only need `docs.mywebsite`. This reduction allows us to reverse the way domains are
written, therefore placing the TLD at the start of the domain instead of at the end, emphasizing the identity we are
referring to and then the extra information, in the form of subdomains.

For example, imagine we have a company "Fake Company, LTD", which is present in multiple countries with different
languages. Our company exposes a landing to present the company and its products, a blog to share news and a
documentation website to help users. In Web2 we could have a structure like:

- `fakecompany.com` - english landing
    - `blog.fakecompany.com` - english blog
    - `docs.fakecompany.com` - english docs
- `fakecompany.es` - spanish landing
    - `blog.fakecompany.es` - spanish blog
    - `docs.fakecompany.es` - spanish docs

This structure imposes our company to buy `fakecompany.com` and `fakecompany.es` and then create subdomains for its
internal services. With **Suri** we will have a structure like:

- `fakecompany` - english landing
    - `fakecompany.blog` - english blog
    - `fakecompany.docs` - english docs
- `fakecompany.es` - spanish landing
    - `fakecompany.es.blog` - spanish blog
    - `fakecompany.es.docs` - spanish docs

Everything is inside our main suri `fakecompany`, which represents our identity, so anyone can directly type our name to
access our default (english) web or easily localize it appending the country code.

As we only require `fakecompany` we don't need to buy `fakecompany.com`, `fakecompany.es` and all the other
possibilities.

Last but not least, we are always emphasizing our identity, because is what the user types first.