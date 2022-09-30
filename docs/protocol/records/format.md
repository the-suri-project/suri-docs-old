# Record Format

Records have only one canonical format for their definitions, consisting of a Suri in
its [standard format](docs/domains/formats#standard-format) followed by a colon `:` and a stack of protocols along with
their arguments:

```:no-line-numbers
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
─┬────────── ─┬──────────────────────────
 └►Suri       └►Protocol stack
```

The protocols are expressed by indicating the highest level first to facilitate the
searching process. Moreover, each protocol is followed by an optional argument in
parentheses in case the protocol needs it.

```:no-line-numbers
                   Protocol level
             + ───────────────────────► -
suri.domains:http<tcp(80)<ipv4(127.0.0.1)
             ─┬──         ─┬─────────────
              │            └► Protocol with argument
              └─► Protocol without argument
```

::: details Formal definition

```:no-line-numbers
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

::: note Insight
The final value of a record is the result of combining the value of each protocol inside the record.
:::

## Signature

All records have a signature that identifies them and allows to classify them. The signature is the list of protocol
names without arguments.

```:no-line-numbers
Record:    suri.domains:http<tcp(80)<ipv4(127.0.0.1)
                        ──── ───     ────
Signature:              http<tcp    <ipv4
```

::: note Insight
The signature does not need to be unique.
:::