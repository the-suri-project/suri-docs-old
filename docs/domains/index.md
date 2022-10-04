# Suri domains

Suri domains, or simply, suris, are the base of the project. They are built hierarchically: parents manage
their children. The root of the tree is the suri root domain `.` and, from the root, each parent can have multiple children.

```:no-line-numbers
                    .
            ┌───────┴────────┐
           com              suri
     ┌──────┘        ┌───────┴───────┐
  com.solana     suri.domains    suri.docs
```

Suri domains can be used to represent an entity in the Web3 internet, e.g. a user, a project, a collection, a website,
in the end, anything you can think of. Within a suri domain, the owner can either build children domains for his personal use, or resell them at his discretion.

Here's an example of use case using "facebook" as the parent domain, with several use cases such as a user's profile, a corporate webpage, and a resellable business profile page:

|                                  |    Web2 - DNS                          |                       Web3 - SURI                |
|----------------------------------|:--------------------------------------:|:------------------------------------------------:|
| Parent domain                    |facebook.com                            |                      facebook                    |
| A user called John Doe's profile |https://en.facebook.com/people/John-Doe/|                  facebook.John-Doe               |
| Facebook's privacy page          |https://facebook.com/privacy/           |                   facebook.privacy               |
| Facebook business profile        |https://facebook.com/customer/cocacola  |          facebook.cocacola.subscription          |
