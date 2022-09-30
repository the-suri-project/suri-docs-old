# Tagged suris

Tagged suris consist of a prefix denoting a special meaning and a list of suri names separated by a dot `.`,
e.g. `@myUserName.twitter`, `#subject`, `$USDC`, etc.

::: info Insight
Tagged domains are just a special representation of an equivalent canonical suri, thus they do not have any special
meaning to the system or added functionality.
:::

The idea behind this representation is to emphasize an identity or a subject, which is more relevant than the rest of
the suri. This is especially useful for suris that belong to users or brands.

Some examples are:

- We want to use a suri as a source of our digital identity, we can use a _mention_ `@username` and then use
  subdomains to split the content for our social networks, e.g. `@username.twitter`, `@username.facebook`, etc.

- A Web3 project is minting a new token and exposing its data using a _cashtag_ `$MY_TOKEN`. They want to store its
  public information, like where to buy it, the project's website..., in the suri's records but storing the pricing
  information in `$MY_TOKEN.pricing` to separate the concepts and using the suri as a kind of oracle.

If instead of using a tagged suri we used a regular suri, we would have ended with `twitter.username`
or `pricing.MY_TOKEN` which are perfectly fine but do not emphasize the actual subject of the action.

You can check the full [definition](/en/domains/formats#tagged-format) and all tagged types in the following section.