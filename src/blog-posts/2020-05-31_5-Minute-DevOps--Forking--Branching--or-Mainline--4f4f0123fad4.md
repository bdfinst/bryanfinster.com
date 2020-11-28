---
title: '5 Minute DevOps: Forking, Branching, or Mainline?'
headerImage: ../media/1__ncGkp3vxKrqdQxye98GNdw.jpeg
description: >-
  A frequent conversation I have is about branching patterns. Legacy development
  was all about long-lived branches to develop complete…
date: '2020-05-31T14:33:53.701Z'
categories: devops
tags: 
  - lean
  - source management
slug: /@bdfinst/5-minute-devops-forking-branching-or-mainline-4f4f0123fad4
---

<img src="../media/1__ncGkp3vxKrqdQxye98GNdw.jpeg" width="50%"></img>
undefined

A frequent conversation I have is about branching patterns. Legacy development was all about long-lived branches to develop complete features followed by code freeze and merge hell. With continuous delivery, this changes. CD requires continuous integration and CI requires some form of [trunk-based development](https://trunkbaseddevelopment.com/) with either mainline development or short feature branches. Which is the best pattern?

### Mainline?

In mainline development, changes are made directly to the trunk. Zero branching. When people first hear of TBD, they frequently envision mainline. Mainline **can** be an effective process but it requires some things to be safe.

1. Mature quality gates and team quality process
2. Pair programming for instant code review

In regulated environments, this is typically discouraged as it makes code review unverifiable.

### Fork or Branch?

The debate I most often hear is branching vs. forking. On teams who are "doing CD" meaning "we have an automated deploy process", it's very common for forking to be preferred because "that's what open source does!" That's true. **untrusted** contributors use forks in open source. It's also very process-intensive, which is why teams actually executing with CD don't do that.

A fork is a private copy of the source code. The flow is that I make a fork of the code, make changes, and then submit a complete change back to the core team for code review and eventual rejection or approval. While the fork exists, there is no visibility to the work that I'm doing. Open source uses this process because the number of people who start to contribute is much smaller than the number of people who finish a contribution. Since the forks are private, they do not clutter up the source tree of the main project with noise.

A branch is a copy of the code that is visible to the core team. It allows anyone on the core team to see the current changes and the progress of the work.

For CD to function, the team must be executing CI and that requires a high level of team communication. Additionally, a product team is responsible as a team for delivering changes. The individuals on the team do not have sole responsibility. Since forks are private to the individual developer, forks put the entire team at risk of not delivering.

* The team cannot see the progress of change
* The team has no way of finishing the change if the developer is unavailable.

When designing processes, pessimism is a very useful skill. "What can go wrong with this?" I used to joke that forking code within a product team put the team at risk because "what if someone gets hit by a bus?" I don't joke about this anymore because of a team that had to re-create the work of a teammate who was involved in a fatal accident. The world is uncertain. Plan for it.

So, fork or branch? We should branch for all work the team is expected to deliver. Forks are for experiments or non-critical external contributions that have no priority. Open source is a model for open source problems, not for the problems of product team development and daily delivery.
