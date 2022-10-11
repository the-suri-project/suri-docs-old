# Suri domain formats

Suris are defined by a series of names separated by dots `.`. Those names are called _level entries_ because each of
them belongs to a specific level, being the left-most the highest level.

```:no-line-numbers
   Specificity
+ ────────────► -
suri.domains.docs
─┬── ─┬───── ─┬──
 │    │       └► 3rd level
 │    └► 2nd level
 └► 1st level
```

::: note Insight
This works in the reverse order of the DNS hierarchy, where the deepest level is writen first. For example, the DNS
domain `docs.suri.domains` would be written as `domains.suri.docs` in suri.
:::

The level of an entire Suri is equal to the most specific level entry, or the count of level entries. In the previous
example, the Suri `suri.domains.docs` has a level of 3.

When a Suri has a level of 1, it is called **TLD** suri or _Top Level Domain_ suri.

## Canonical format

In canonical format, Suri level entries are displayed starting from the highest level on the left, to the lowest on the
right being each level followed by a dot `.` but the last one.

- `.` - root
- `com`
- `domains`
- `suri.domains`
- `suri.domains.docs`

::: details Formal definition

```:no-line-numbers
<canonical_suri> := <root> | <suri>
          <root> := '.'
          <suri> := <name> ('.' <name>)*
          <name> := <name_char>+ ("-"+ <name_char>+)*
     <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::

## Tagged format

Finally, tagged format consist of a suri prefixed by a symbol, called tags, that gives them an extra meaning. Tagged
suris have an equivalent version in the canonical format, therefore you can use any of both to reference the suri. The
available tags are:

| Name           | Symbol | Tagged Form | Canonical Form        |
|----------------|:------:|-------------|-----------------------|
| Mention        |   @    | `@<suri>`   | `tag.mention.<suri>`  |
| Hash / Hashtag |   #    | `#<suri>`   | `tag.hash.<suri>`     |
| Cash / Cashtag |   $    | `$<suri>`   | `tag.cash.<suri>`     |
| Anchor         |   &    | `&<suri>`   | `tag.anchor.<suri>`   |
| Alert          |   !    | `!<suri>`   | `tag.alert.<suri>`    |
| Question       |   ?    | `?<suri>`   | `tag.question.<suri>` |
|                |        |             |                       |
| Bitcoin        |   ₿    | `₿<suri>`   | `tag.btc.<suri>`      |
| Ethereum       |   ⧫    | `⧫<suri>`   | `tag.eth.<suri>`      |
| Solana         |   ◎    | `◎<suri>`   | `tag.sol.<suri>`      |

For example: `@myUserName.twitter` is equivalent to `tag.mention.myUserName.twitter`.

::: details Formal definition

```:no-line-numbers
<tagged_suri> := <tag> <suri>
        <tag> := one of [@#$&!?₿⧫◎]
       <suri> := <name> ('.' <name>)*
       <name> := <name_char>+ ("-"+ <name_char>+)*
  <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::