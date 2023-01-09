<style>
td > code {
    white-space: nowrap;
}
</style>

# Alias protocol

The _Alias Protocol_ is a special protocol that enables searching part or all the content of a record in another one of
the same suri or another. It acts similar to a `CNAME` record in [DNS] protocol.

| Name         | Pattern                            | Description                                 |
|--------------|------------------------------------|---------------------------------------------|
| Alias        | `alias(EXACT_QUERY)`               | An alias of another record in the same suri |
| Remote Alias | `alias(SURI_ADDRESS, EXACT_QUERY)` | An alias of another record in another suri  |

The `EXACT_QUERY` argument defines the signature to search on the target suri. That inner signature is also part of the
signature of the outer record, so the signature of the record will be the addition of all the protocols inside and
outside of `alias` without including it:

```:no-line-numbers
   Record:    suri.domains:http+alias(tcp(80)+ipv4(127.0.0.1))
                           ──── ───── ───     ────
Protocols:                 http+alias+tcp    +ipv4

Signature: http+ipv4+tcp
```

::: note Insight
`EXACT_QUERY` cannot contain nested `alias` protocols.
:::

## Utilities

This protocol can be used to define complex dependencies between records, for example, you want to define the route to a
website that exposes your CV including your picture. You want also to define that picture as your public profile picture
for social networks. In this case, you can define two absolute records like this:

- **Website**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Profile picture**: `profile-pic+http(/path/to/picture.png)+tls+tcp(443)+ipv4(127.0.0.1)`

Or you can define a relative protocol so if you change the website address, you don't need to change the profile picture
too:

- **Website**: `http+tls+tcp(443)+ipv4(127.0.0.1)`
- **Profile picture**: `http(/path/to/log.png)+alias(http+tls+tcp+ipv4)`

::: note Insight
Have in mind that the alias protocol is not a redirection, it is a reference to another record, so the users will always
see the same suri they searched for.
:::

## Replacements

In the previous example we used the record `http(/path/to/log.png)+alias(http+tls+tcp+ipv4)` to define an alias to the
website's record. As you can see, there are two different `http` protocol definitions. The inner one specifies what to
search in the target record (website's) while the outer one specifies a replacement so when the alias is resolved, the
inner `http` value is replaced by the outer one.

In the following example you can see how to define replacements for some protocols (HTTP, TCP) while keeping others
(IPv4):

```:no-line-numbers
Origin Record: origin.suri:http(/path/to/file)+tcp(95)+alias(TARGET_SURI_ADDRESS, http+tls+tcp+ipv4)
                                                             ─┬─────────────────  ─┬────────────────
                     ┌────────────────────────────────────────┘   ┌────────────────┘
               ──────┴──── ───────────────────────────────────────┴─
Target Record: target.suri:http(/another/path)+tcp(80)+ip(127.0.0.1)
                                                       ─────────────
 Final Record: origin.suri:http(/path/to/file)+tcp(95)+ip(127.0.0.1)
```

::: note Insight
The default behaviour for replacements is to completely replace the inner protocol with the outer one, but it can be
customized by protocol. For example, clients can replace `http` paths if the outer is absolute or merge them if it is
relative.
:::

[DNS]: https://en.wikipedia.org/wiki/Domain_Name_System