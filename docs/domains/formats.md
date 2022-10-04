# Suri domain formats

Suris are defined by a series of names separated by dots `.`. Those names are
called _level entries_ because each of them belongs to a specific level, starting
the count from the last one.

```:no-line-numbers
   Specificity  
+ ◄──────────── -               ◄── importance of level: 1st level is displayed left
docs.suri.domains
─┬── ─┬── ─┬─────
 │    │    └► 1st level
 │    └► 2nd level
 └► 3rd level
```

The level of an entire Suri is equal to the most specific level entry, i.e. the count
of level entries. In the previous example, the Suri `www.suri.domains` has a level
of 3.

When a Suri has a level of 1, it is called **TLS** or _Top Level Suri_ the same way
**TLD** or _Top Level Domain_ is used for web2 domains.

::: note Insight
The root Suri is the only one that has level 0, and it's represented by a single dot
`.`
:::

## Canonical format

In canonical format, Suri level entries are displayed starting from the highest level on the left, to the lowest on the right
being each level followed by a dot `.`.

- `.` - root
- `com.`
- `domains.`
- `suri.domains.`
- `suri.domains.docs`

::: details Formal definition

```:no-line-numbers
<canonical_suri> := <level_entry>+ | '.'
   <level_entry> := <name> '.'
          <name> := <name_char>+
     <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::

## Standard format

The standard format is the same as the canonical but making the final dot `'.'` optional.
This is the standard format used across the Internet to express web2 domains.

- `.` - root is equal to the canonical format.
- `suri.domains` becomes `suri.domains.` in the canonical format.
- `suri.domains.` is equal to the canonical format.

::: details Formal definition

```:no-line-numbers
# Format:
<standard_suri> := (<name> <level_entry>*)? '.'?
  <level_entry> := '.' <name>
         <name> := <name_char>+
    <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::

## Tagged format

Finally, a specific set of Suris can be expressed in the tagged format.
Tagged suris are built by reversing the Suri's canonical format, removing the initial 2 levels and adding a
symbol as prefix. There rules can only be applied to certain symbols as tags:

| Name           | Symbol | Tagged Form        | Canonical Form        |
|----------------|:------:|--------------------|-----------------------|
| Mention        |   @    | `@<reversed_suri>` | `<suri>.mention.tag`  |
| Hash / Hashtag |   #    | `#<reversed_suri>` | `<suri>.hash.tag`     |
| Cash / Cashtag |   $    | `$<reversed_suri>` | `<suri>.cash.tag`     |
| Anchor         |   &    | `&<reversed_suri>` | `<suri>.anchor.tag`   |
| Alert          |   !    | `!<reversed_suri>` | `<suri>.alert.tag`    |
| Question       |   ?    | `?<reversed_suri>` | `<suri>.question.tag` |

The reason for reversing the Suri is that in standard Suris we want to emphasize the
most specific entry level, as focus of our action. In `docs.suri.domains` we want to
 emphasize the `docs` part because that is the place we want to navigate to.

However, in the tagged format we want to emphasize the least specific entry level
because that one represents the topic of the action. For example, for `@suri.docs`
we emphasize the `suri` entry level which is the digital identity of the `docs`
section we want to access. This method improves the readability of Suris and
emphasizes the digital identity behind services.

::: note Note
The level of a tagged Suri is always 2 + the number of level entries.
:::

Examples:

- `@a.b.c` becomes `c.b.a.mention.tag.` in the canonical format.
- `#a.b.c` becomes `c.b.a.hash.tag.` in the canonical format.
- `$a.b.c` becomes `c.b.a.cash.tag.` in the canonical format.
- `&a.b.c` becomes `c.b.a.anchor.tag.` in the canonical format.
- `!a.b.c` becomes `c.b.a.alert.tag.` in the canonical format.
- `?a.b.c` becomes `c.b.a.question.tag.` in the canonical format.

::: details Formal definition

```:no-line-numbers
<tagged_suri> := <symbol> <name> <level_entry>*
     <symbol> := one of [@#&$+-*]
<level_entry> := '.' <name>
       <name> := <name_char>+
  <name_char> := <unicode_xid_body> | <unicode_number> | <emoji_pictographic> | <emoji_component>
```

:::