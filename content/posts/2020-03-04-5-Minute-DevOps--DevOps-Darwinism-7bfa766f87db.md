---
title: '5 Minute DevOps: DevOps Darwinism'
socialImage: 1__wb60zuGFQWEKghVd__iDSyA.jpeg
template: post
draft: false
description: >-
  As organizations attempt to transform, they often focus on tooling or hiring
  “transformation consultants” as a silver bullet. However…
date: '2020-03-04T20:01:23.783Z'
category: devops
tags:
  - devops
slug: 5-minute-devops-devops-darwinism-7bfa766f87db
---

As organizations attempt to transform, they often focus on tooling or hiring “transformation consultants” as a silver bullet. However, tools are a small fraction of the problem and training teams to Scrum usually results in small, low-quality, waterfall projects. Organizations tend to struggle for some very common, simple, and difficult to fix reasons. If you are not getting the outcomes you wanted or expected, look around. Are you seeing these?

### Tl; dr

Delivering value better to the end-user is not a problem that can be solved by hiring “smarter” developers or having teams use a new methodology. Improving value delivery requires the entire system to change.

Things aren’t improving because your organization isn’t configured for the improvement you want. What will you fix first?

![By Kamsster — Own work, CC BY-SA 4.0, [https://commons.wikimedia.org/w/index.php?curid=40752037](https://commons.wikimedia.org/w/index.php?curid=40752037)](/bryanfinster.com/media/1__wb60zuGFQWEKghVd__iDSyA.jpeg)
By Kamsster — Own work, CC BY-SA 4.0, [https://commons.wikimedia.org/w/index.php?curid=40752037](https://commons.wikimedia.org/w/index.php?curid=40752037)

### Issues that Impact Team Evolution

The teams in the organization are organisms that have evolved to survive in the current working environment. The issues you see are not team failures; they are the behaviors that the teams have found that give them the best chance to thrive in your organization, even as the organization falls behind. Consider this while designing an improvement plan.

#### Poor Quality

Quality never comes from “just do it right the first time”. Quality is the outcome of having a clean quality signal that identifies poor quality as early as possible and by continuously improving every area where quality issues can occur. In software development, the main quality signals come form quality checks in the delivery process and customer feedback. The main quality issues come from humans modifying code. Since quality is the key enabler to availability and speed to market, we need to change our environment to improve the quality signal.

For decades, organizations have tried force quality at the end by assigning test teams to manually test or create test automation to inspect completed work. In fact, most universities don’t even include testing as part of any degree that includes software development. Testing is often seen as a lower-level position for failed developers. Would you buy a car where the only quality check was to drive it around the parking lot after assembly to make sure it didn’t instantly fall apart? How would that company identify the source of the inevitable issues? To resolve this, the team delivering the solution needs to put building a stable quality signal as their highest priority. We automate delivery to remove variation in the process. We build out tests to verify we have not broken working features. We relentlessly eliminate random test failures. We design every test with the idea of getting rapid notification of the failure as close to the source of the failure as possible.

Another issue is organizations offloading product support to support teams. This adds another filter to the quality signal that hides the pain of poor quality from the source of poor quality. Quality doesn’t come from trying harder. Quality comes from ownership of the solution and by feeling the consequences of poor quality.

Change the incentives. Teams must be given quality ownership. This does not mean punishing people for defects. This means making sure that engineers get rapid feedback on quality issues, have the authority to make the quality better, and are responsible for the consequences of poor quality by having direct support responsibility. This will require training and a focus on test design by everyone. Invest in the teams and they will deliver.

#### Knowing What to Build

Software delivery is a system. Coding is a small portion of that system. Knowing what to code, and what not to, is a critical activity that many teams skip because it “takes too much time”. It’s common to see “Agile” execution of the waterfall process of someone writing down requirements and handing them to developers to code. Water-scrum-fall. When the organization believes that we must “optimize for developer productivity” by making sure developers are coding as much as possible, then quality suffers. Breaking down work to the detail required for an effective quality process needs the whole team. This is the first chance the team has to implement its quality process:

*   Do we understand how to measure the success of this feature?
*   Do we know everything we need to know about how it’s expected to behave?
*   Do we understand and have a plan for all dependencies, met or not?
*   Is this the right thing to build into our product?
*   Have we finalized the **exact** behaviors to prevent gold plating?
*   Do we know how to verify the behaviors with tests?

All of these answers must be affirmative before work can start and only the team can answer these questions. If someone pushes the team to start work before these checks pass, who is at fault for the poor outcomes?

If teams are incentivized by tasks completed instead of value delivered, then the quality will suffer. To change the behavior from order taking to quality ownership, the team must be rewarded for outcomes, not output.

#### Large Batch Sizes

Large changes are risky, slow to deliver value, and delay quality signal. Most organizations unintentionally encourage large changes by having heavy approval processes, multiple handoffs, or project planning habits that think in terms of “done” instead of the next delivery of value. Teams react to these by batching up changes.

It is better to deliver many small things than one big explosion. How small is small enough? Any work that cannot be broken down into units that a single developer can deliver in a couple of days will not meet the standard for “small enough”. There will be hidden unknowns and assumptions that will reduce quality. Yes, it is an additional upfront effort. However, the entire system of delivery is improved. Everyone understands the work, everyone can help deliver it, and if any single team member becomes unavailable for any reason the work is only slightly impacted. Also, small changes begin to flow to the end-user rapidly enough to answer the most critical questions as cheaply as possible: Are we building the right thing? Can we verify quality?

The problem with small changes are they require an organizational shift in thinking. The entire system of delivery needs to be reviewed to remove cost and waste that incentivize large changes. Are there feedback delays from external team handoffs? Are we handling dependency management with code or with added process? Also, the developers need to understand that no feature is ever complete, so waiting to deliver complete features is wasteful.

Fixing the problems takes planning. Make sure you understand your delivery pipeline. Measure how long it takes to go from commit to production. Make sure you have a solid quality signal and then begin reducing the time between when work begins and when value is delivered. As you set the next improvement targets on this cycle time, you’ll uncover additional hidden waste either in the delivery pipeline, the development process, or upstream in how requirements are refined. Execute an improvement plan to fix the issues and change the environment to an expectation of continuous integration and small units of work.

#### Misaligned Incentives

A common anti-pattern is to attempt to measure a person’s productivity by the number of features they finish. Developers are problem solvers. If you give them the problem of “how can I make my productivity metric look good?”, they will do that at the expense of helping the team deliver value. Of course, since the delivered value is not being measured, it’s not important. Sure, the product is poor quality and the organization is failing, but I’m a rock star because of my output. I probably have a support team handling the defects anyway because support “reduces developer productivity”. My survival instinct tells me to avoid any work not related to my task so the new team members are on their own and I’ll avoid code review or just give it a passing glance. Those things make me “less productive”.

Quality comes from discussing issues and ideas. Value is delivered faster by teams collaborating. The team should be rewarded for the outcomes of their product and have the ability to improve those outcomes without being told to do so or asking permission. If I finish coding a task and submit it for code review, new work should be the **last** thing on my mind. There are probably other code reviews that need to be done; [we are doing continuous integration after all](https://medium.com/itrevolution/5-minute-devops-engineering-culture-change-with-ci-61cd640a5ea3). Someone on the team may be scratching their head or deep in thought about their work, how can I help them? What about that doubt I had about our tests? I should go try to break things in the application to see if I’m right. Continuous exploration to find new defects before the user discovers them helps to keep me sleeping at night. Nothing else to do? What‘s the next priority?

This working agreement leads to less code written and better outcomes. It’s our product. We are proud of it. We want it to be good. We want the user to embrace it. We build quality and deliver value, **as a team,** rapidly.

#### Culture Challenges

Team culture is incredibly important. Teams of heroes who are competing against each other for promotion deliver solutions that require heroism. Team members who fear obsolescence will hoard knowledge to become “indispensable”. Senior developers who desire respect over outcomes will demand to be the arbiter of good code and final reviewer of all change. None of these behaviors protect business goals.

A team is a group of individuals who all share a common goal, respect each other, and support each other to reach those goals. Team members elevate and help each other, they do not compete. However, it’s very common to see HR or leadership behaviors that are unintentionally designed to destroy this culture. Heroes awarded for handing the major outage. Comparing team members based on tasks completed. Some even use lines of code as a measure of productivity. This deep misunderstanding of teamwork is frankly shocking. If you recognize these anti-patterns, the environment must be changed,

### Leadership Should Lead

![[https://www.misawa.af.mil/News/Commentaries/Display/Article/1675993/servant-leadership/](https://www.misawa.af.mil/News/Commentaries/Display/Article/1675993/servant-leadership/)](/bryanfinster.com/media/1__83bMUG2uaz239j__BjGii1g.jpeg)
[https://www.misawa.af.mil/News/Commentaries/Display/Article/1675993/servant-leadership/](https://www.misawa.af.mil/News/Commentaries/Display/Article/1675993/servant-leadership/)

“All of **you** need to change!” The problem is that the entire organization, including leadership, must change to support the outcomes. When change is focused only on the teams then the best case will be minor local optimization of a few interested teams who happen to be organized correctly. If your goal is to improve the ability of your organization to deliver, it’s not enough to say buzz-words and ask why nothing improves. You must study what is required to help the teams achieve those goals. You need to understand what current issues in the environment of your organization are causing the teams to work the way they are. You need to systematically change that environment to get the outcomes you want. This takes work. Get out in front. Dig in. Lead the change.

**If you found this helpful, it’s part of a larger** [**5 Minute DevOps series**](https://medium.com/search?q=%225%20minute%20devops%22) **I’ve been working on Feedback is always welcome.**
