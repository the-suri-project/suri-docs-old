# Tagged suris

Tagged suris consist of a prefix denoting a special meaning and a list of suri names separated by a dot `.`,
e.g. `@myUserName.twitter`, `#subject`, `$USDC`, etc.

::: note Insight
Tagged domains are just a special representation of an equivalent canonical suri, thus they do not have any special
meaning to the system or added functionality.
:::

The idea behind this representation is to add some special meaning to a name, like identity or subject, which defines
the [TLD] of the suri. This is especially useful to differentiate users from brands or specific subjects.

Some examples are:

- We want to use a suri as a source of our digital identity, we can use a _mention_ `@username` and then use subdomains
  to split the content for our social networks, e.g. `@username.twitter` `@username.facebook`, etc. We could have used
  a [TLD] here like just `username` but this way we are emphasizing we are a person and not a brand.

- A Web3 project is minting a new token and exposing its data using a _cashtag_ `$MY_TOKEN`. They want to store its
  public information, like where to buy it, the project's website, etc. in the suri's records but storing the pricing
  information in `$MY_TOKEN.pricing` to separate the concepts, using the suri as a kind of oracle. With the prefix `$`
  we have clear that it is a token and not a brand or user.

If instead of using a tagged suri we use a regular suri, we would have ended with `username.twitter`
or `MY_TOKEN.pricing`, which are perfectly fine but do not emphasize the actual subject of the action.

You can check the full [definition](/en/domains/formats#tagged-format) and all tagged types in the following section.

[TLD]: https://en.wikipedia.org/wiki/Top-level_domain