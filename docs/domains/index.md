# Suri domains

Suri domains, or just suris, are the base of the project. They work as a hierarchy of names in which parents manage
their children. The root of the tree is the suri root domain `.` and each parent can have multiple children.

```:no-line-numbers
                    .
             ┌──────┴────────┐
           com.           domains.
     ┌──────┘        ┌───────┴─────────┐
solana.com.    suri.domains.     other.domains.
```

Suri domains can be used to represent an entity in the Web3 internet, e.g. a user, a project, a collection, a website,
in the end, anything you can think of.