---
title: '5 Minute DevOps: Standardizing to Scale'
cover: 1__M6Qvf__fjEvzWocP3dexI4A.jpeg
description: >-
  Scaling improvement is the siren song of every enterprise. Once we experience
  a team that is able to deliver the outcomes we are looking…
date: '2020-03-08'
category: ''
tags: []
slug: /@bdfinst/5-minute-devops-standardizing-to-scale-6a66cededade
---

![[https://www.flickr.com/photos/adactio/2856955322](https://www.flickr.com/photos/adactio/2856955322)](img/1__M6Qvf__fjEvzWocP3dexI4A.jpeg)
[https://www.flickr.com/photos/adactio/2856955322](https://www.flickr.com/photos/adactio/2856955322)

Scaling improvement is the siren song of every enterprise. Once we have a team that is able to deliver the outcomes we are looking for, the obvious next step is to define those best practices for the rest of the teams. Then scaling is just a shake and bake exercise.

All we need to do now is to make all other teams work the way the successful team works:

*   All teams will have the same sprint cadence
*   All teams will have the same size story points _(note: if using days for points, call them days. Points aren’t a measure of time.)_
*   All teams will use the same tech stack
*   All teams will use the same quality process
*   etc.

Success!

There are some problems with this approach though. It assumes all teams are solving the same problem with the same architecture and have the same skill levels. It also does some very destructive things:

1.  _Leadership is responsible for quality instead of the teams_
2.  _Teams must ask permission to improve quality._
3.  _All teams are constrained to the outcomes of the lowest-performing team._

That isn’t a good thing because leadership is usually the last to know about poor quality and usually because of customer feedback. If a team needs to ask permission to improve quality, they probably won’t. The teams with people who know better ways to deliver will have more turnover as those developers find less frustrating places of employment where they are respected as engineers. None of these are good for the bottom line.

### Now what?

We still need all of the teams to improve and improvement isn’t just some random thing that accidentally happens. There must be a methodology to it. Instead of dictating the process, we need to use balanced metrics and ownership.

#### Metrics:

*   How frequently is code integrating into the trunk? This is a KPI for clear requirements and small coding tasks that are well understood by the team. This reduces guessing and defects.
*   What is the build cycle time between code commit and code deployed to production? This is a KPI for the efficiency of the testing process. A test suite has two primary goals: notify the developer of any defect as soon as possible and allow the developer to quickly locate and fix the defect. This gives the best opportunity for the developer to learn how to not create that defect in the future. Prevention is much cheaper than detection and repair. Long cycle times here indicate poor test architecture that will reduce the team’s ability to improve development.
*   Where are defects found in the build? Are most defects found in environments closer to production or, worse, in production? This is a KPI for the effectiveness of the test suite. Tests should be optimized to quickly detect defects as close to the source as possible.

#### Ownership

One of the practices people always talk about at conferences is “self-organized teams”. The thing people tend to leave out is that those self-organized teams become chaos without clearly defined goals and expectations. Self-organized teams have total ownership of their product. They are responsible for how it is built and feel the consequences of building it the wrong way. They eat their own dog food. Ownership can be destroyed by either telling them how to work or by outsourcing production support to another team. If they lack full ownership, the quality will always suffer.

### Next Steps

Scaling quality comes from disciplined development, ownership, and practice. When we work with teams, we focus on the discipline of continuous integration. Each developer integrates fully tested, backward compatible code to the trunk at least once a day. If we can’t, why can’t we? Solve that problem and the next and the next. We make them responsible for the outcomes, and we reduce the batch size of everything so that things happen more frequently. We integrate rapidly because it improves the feedback loop. Give teams the freedom to find better ways that align with the goals, demand excellence, and get out of their way. They will deliver.

**If you found this helpful, it’s part of a larger** [**5 Minute DevOps series**](https://medium.com/search?q=%225%20minute%20devops%22) **I’ve been working on Feedback is always welcome.**