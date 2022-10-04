# Record Protocols

Records are defined by the protocol placed in them and the arguments of those protocols. A record can contain one or
more protocols making a protocol stack in which the first protocol is the top one and the rest are placed below.

A website definition requires an IP address, a TCP port, whether to use TLS protocol or not, and the HTTP protocol, thus
it would be defined as: `http<tls<tcp(443)<ipv4(0.0.0.0)`. This corresponds to the stack:

```:no-line-numbers
3. [Application level] http
2.   [Transport level] tls
2.   [Transport level] tcp(443)
1.     [Network level] ipv4(0.0.0.0)
```

In the [following section](/protocol/records/protocols/standard) you can find the list of protocols with native support
in **Suri** but anyone can use any custom protocol and combine them with other protocols in order to build a custom
stack.

For example, social networks can use the following protocol stacks to access users' public information:

- `profile+name<text(USERNAME)` for name.
- `profile+desc<text(DESCRIPTION)` for description.
- `profile+pic<http<tls<tcp(443)<dns(WEB_DOMAIN_OF_MY_PICTURE)` for profile picture.

This kind of composition opens together with the [search algorithm](/protocol/searching/) opens a wide range of
possibilities to increment the use cases of suris.