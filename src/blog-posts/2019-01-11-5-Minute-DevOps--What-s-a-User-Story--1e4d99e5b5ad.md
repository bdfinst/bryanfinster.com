---
title: "5 Minute DevOps: What's a User Story?"
headerImage: ../media/1__pT9l52TIc2zEVuvxPpK3VA.jpeg
template: post
draft: false
description: >-
  One of the bigger problems we've seen in many companies moving to agile development is the fact that the people leading the change are typically **not** currently developers. Many took classes on "Agile" to become "Certified", but the real world examples people need to translate their current processes to delivering with more agility rarely come from books...
date: '2019-01-11T00:26:31.251Z'
tags:
  - lean
slug: 5-minute-devops-whats-a-user-story-1e4d99e5b5ad
---

![[https://www.flickr.com/photos/83633410@N07/7658298768](https://www.flickr.com/photos/83633410@N07/7658298768)](../media/1__6JkoIvqkxssqT1__OTMyPtw.jpeg" width="50%"></img>
[https://www.flickr.com/photos/83633410@N07/7658298768](https://www.flickr.com/photos/83633410@N07/7658298768)

One of the bigger problems we've seen in many companies moving to agile development is the fact that the people leading the change are typically **not** currently developers. Many took classes on "Agile" to become "Certified", but the real world examples people need to translate their current processes to delivering with more agility rarely come from books. How many of the signatories of the [Manifesto for Agile Software Development](https://agilemanifesto.org/) are certified?

Have you heard variations of discussions like this? I have.

_Dev: "What's a user story"_

_Certified Agile Coach: "It meets INVEST, obviously. Also, it has a persona and a value statement."_

_Dev: "Invest?"_

_CAC: "Independent, Negotiable, Valuable, Estimable, Small, and Testable"_

_Dev: "OK, so the business won't use anything until it's all done, so the entire application is a user story?"_

_CAC: "Well, no. It's smaller than that, obviously!'_

_Dev: "Well, I can't negotiate anything smaller and it has no value otherwise so.."_

And so on, until the contract tuns out and the Certified Coach collects their fee and is starts their next contract. Right after that comes the "story point" conversation.

The outcome of this is teams sitting in meetings parsing words and coming up with "As a developer, I want a database, so that the application can store data" and then arguing how to estimate it.

![[https://www.pexels.com/photo/male-statue-decor-931317/](https://www.pexels.com/photo/male-statue-decor-931317/)](../media/1__DKnSr68FwmMfocwZ2T0lHA.jpeg" width="50%"></img>
[https://www.pexels.com/photo/male-statue-decor-931317/](https://www.pexels.com/photo/male-statue-decor-931317/)

As a practitioner of Pragmatic DevOps, testable definitions are required to effectively onboard developers who are new to continuous delivery. To meet the goals of CI/CD and to deliver predictably, we need to deliver tiny batches of work that we can **demonstrate** and **get feedback** on. It's also very important that we are able to effectively communicate using ubiquitous language that all stakeholders understand. In that vein, we use the following definitions when helping teams and external stakeholders understand Features, Stories, and Tasks.

**Feature:** A complete behavior that implements a new business process and consists of one or more **user stories**. If your feature is too big, then you risk delaying a change that could add value immediately, so keep the features as small as makes sense.

**User Story:** The smallest change that will result in behavior change observable by the user and consists of one or more **tasks**. If the change is not observable, it cannot be demonstrated. If it cannot be demonstrated, there's no feedback loop and you cannot adjust with agility.

**Task:** The smallest independently deployable change. Examples: configuration change, new test, new tested function, table change, etc. A task may or may not implement observable change, but it is always independent of other changes. If a task cannot be deployed without another task, then change priorities or learn how to use feature flags.

Keeping language simple and minimizing the ways definitions can be interpreted is key to effective skills training. We recommend starting a glossary and testing the definitions. If they cause confusion, refactor them.

Coming next: **You Don't Need Story Points!**
