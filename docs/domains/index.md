# Suri domains

Suri domains, or simply, suris, are the base of the project. They are built hierarchically: parents manage their
children. The root of the tree is the suri root domain `.` and, from the root, each parent can have multiple children.

```:no-line-numbers
                    .
            ┌───────┴────────┐
           com              suri
     ┌──────┘        ┌───────┴───────┐
  com.solana     suri.domains    suri.docs
```

Suri domains can be used to represent an entity in the Web3 internet, e.g. a user, a project, a collection, a website,
in the end, anything you can think of. Within a suri domain, the owner can either build children domains for his
personal use, or resell them at his discretion.

Here's an example of use case using a brand called _Fakebook_, with several use cases such as a corporate webpage,
localized versions and a subscription profile page:

|                                 |              Web2 - DNS               |          Web3 - SURI           |
|---------------------------------|:-------------------------------------:|:------------------------------:|
| Parent domain / General website |             fakebook.com              |            fakebook            |
| Localized website               | es.fakebook.com <br/> fr.fakebook.com | fakebook.es <br/>  fakebook.fr |
| FancyCola's business profile    |      fancycola.subs.fakebook.com      |    facebook.subs.fancycola     |
