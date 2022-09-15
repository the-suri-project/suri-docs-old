# Record Formats

The records have only one canonical format for their definitions, consisting of
a Suri in its [standard format](../../domains/formats#standard-format) followed
by a colon `:` and a list of protocols along with their arguments:

```
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
─┬────────── ─┬──────────────────────────
 └►Suri       └►Protocol list
```

The protocols are expressed by indicating the highest level first to facilitate the
searching process. Moreover, each protocol is followed by an optional argument in
parentheses in case the protocol needs it.

```
                   Protocol level
             + ───────────────────────► -
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
             ─┬──         ─┬─────────────
              │            └► Protocol with argument
              └─► Protocol without argument
```

::: details Formal definition

```
# Format:
<canonical_record> := <canonical_suri> ':' <protocol_list>
   <protocol_list> := <protocol> ('<' <protocol>)*
        <protocol> := <protocol_name> <protocol_arg>?
   <protocol_name> := <name_char>+
       <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
    <protocol_arg> := '(' <escaped_text> ')'
    <escaped_text> := (<any char but [\n\r\t\s\\\)\|]> | <escape>)+
          <escape> := '\\' [\\nrts\)\|]
            <name> := <name_char>+
```

:::

::: warning
Empty arguments are not allowed. For example, `suri:protocol()` is not a
valid record definition.
:::