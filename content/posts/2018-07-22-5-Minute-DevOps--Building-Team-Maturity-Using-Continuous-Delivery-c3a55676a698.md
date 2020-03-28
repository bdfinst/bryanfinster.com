---
title: '5 Minute DevOps: Building Team Maturity Using Continuous Delivery'
socialImage: 1__bAsLr4kTZa0SJCWKBDaSgg.jpeg
template: post
draft: false
description: Using Delivery Constraints to Drive Improvement
date: '2018-07-22T18:14:48.528Z'
category: devops
tags:
  - devops
slug: building-team-maturity-using-continuous-delivery-c3a55676a698
---

Accelerating delivery is a key strategic initiative for any company wishing to remain relevant with today’s rate of change. When teams start the journey from “artisanal development” to continuous delivery, they rarely understand the level of improvement they will achieve when they reach daily delivery and beyond. Maturity doesn’t come from waiting, it comes from doing. Consider this journey. Where are you on it?

### **Quarterly (or longer) Delivery**

![By Bundesarchiv, Bild 183–40551–0003 / CC-BY-SA 3.0, CC BY-SA 3.0 de, [https://commons.wikimedia.org/w/index.php?curid=5353021](https://commons.wikimedia.org/w/index.php?curid=5353021)](/bryanfinster.com/media/1__3UC2sdcusz0hdrPrBYS8__Q.jpeg)
By Bundesarchiv, Bild 183–40551–0003 / CC-BY-SA 3.0, CC BY-SA 3.0 de, [https://commons.wikimedia.org/w/index.php?curid=5353021](https://commons.wikimedia.org/w/index.php?curid=5353021)

We can do this with **any** process, even Waterfall or ad hoc. At the end of the quarter we discover how much of that delivery was unneeded, misunderstood, or of such poor quality that we plan for support impact as part of the roadmap. Generally, heroics are needed to recover or we extend the roadmap and explain _“that’s how software development works”_ to our customers. Using “Agile Methodology” becomes a way to update management in two week increments so they can report if we are trending “green”, but there is minimal value being delivered from “Agile”.

### **Monthly Delivery**

![[https://vintageracecar.com/](https://vintageracecar.com/woods-woods-specializing-in-coachbuilding-radiator-recores-fuel-tanks/)](/bryanfinster.com/media/1__e8s3DoT6GcTku3weF0byug.jpeg)
[https://vintageracecar.com/](https://vintageracecar.com/woods-woods-specializing-in-coachbuilding-radiator-recores-fuel-tanks/)

To gain more trust from our customers, we decide to deliver monthly. As we do this, we discover that our “stories” are actually one or more complete features in “story format” that do not meet [**INVEST**](https://en.wikipedia.org/wiki/INVEST_%28mnemonic%29). We measure [**cycle times**](https://www.isixsigma.com/dictionary/cycle-time/) and focus on reducing those to less than a week. That requires us to focus on the core value of every feature, drive out “gold plating”, and defer features that aren’t the highest priority. We start having more conversations with the customers about their goals, become more knowledgeable about the business, and bring them closer to the team.

We find that split attention and multi-tasking are slowing things down. Even though _“we do Scrum”_, we implement [**WIP limits**](https://searchsoftwarequality.techtarget.com/definition/WIP-limit) on a physical kanban board to focus the team’s efforts on finishing things. This encourages teamwork to finish high value items instead of ensuring everyone is assigned tasks.

Metrics show the estimates are wildly inaccurate on anything but tiny items, so we start [**complexity estimation**](https://lizkeogh.com/2013/07/21/estimating-complexity/) to identify stories that require more breakdown to remove uncertainty.

Handing off to the QA department for test automation or manual testing has been adding lag. Deliverables slip and heroics are required to meet commitments. Quality flowing into QA is so low that reported defects keep putting delivery at risk. We start researching “driving test left” and realize that extending coding time to include proper developer testing reduces overall delivery time due to faster test execution, less spaghetti code, and higher quality. We learn to [optimize for the system](https://blog.deming.org/2016/11/optimize-the-overall-system-not-the-individual-components/) and not locally for the developer. We begin focusing on unit testing and integration testing written during development.

Our code reviews are another pain point. formal code review meetings or requiring the tech lead to review all code adds process overhead that encourages larger changes. When we look at the process we find that proper testing and static code analysis with a very light review for testing behavior and readability is more than enough.

### **Weekly Delivery**

![By Unknown — nick’s thunderbird parts catalog, Public Domain, [https://commons.wikimedia.org/w/index.php?curid=17572247](https://commons.wikimedia.org/w/index.php?curid=17572247)](/bryanfinster.com/media/1__kgaWGJlVmgBAE1dPn7IwGw.jpeg)
By Unknown — nick’s thunderbird parts catalog, Public Domain, [https://commons.wikimedia.org/w/index.php?curid=17572247](https://commons.wikimedia.org/w/index.php?curid=17572247)

After getting our cadence down to monthly, we are starting to see some improvement, but we are still not getting timely feedback on features and it takes months to get a new request through the process. Not only does this make us appear unresponsive to business needs, but priorities constantly shift and sprint plans are often disrupted. In addition, production defects are typically weeks old and require extended triage. We decide shorter cycle times might allow us to more cleanly shift as priorities change. We also predict it will take less time to find root cause due to the smaller change size.

During retrospective we list items that we think may be slowing things down:

1.  Every install has required a change approval process and that process is taking a team member several hours of work spread across several days while they chase down approvals from several levels of management.
2.  We’ve been using long running feature branches to isolate changes and integrating to an intermediate branch for additional testing before we release. We decided before that GitFlow was the safest way to work, but it’s taking significant manual effort to execute relative to a trunk-based flow. This is encouraging long integration cycles which is making each code review so big that things are easily missed.
3.  Many of our stories are requiring additional requests for information which is impacting test development.
4.  Our integration testing is taking too long and changes need to be sequenced to keep those tests from breaking.
5.  Our end to end testing is taking significant team capacity to execute and to keep current. In addition, there are changes happening fast enough that the end to end automators are struggling to keep it current.

To resolve the change approval overhead, we work with management to identify the value they are trying to achieve. They believe that they can identify bad changes with the process, but when we show them data of changes they approved that caused impact and point out that they were too far removed to make effective reviewers, we agree that we can automate a “change notification” process and that the team will use the extra time to find new ways to automate defect identification before production.

With feature flags and expanded developer testing, we can move to [Trunk Based Development](https://trunkbaseddevelopment.com/) and we update our working agreement to integrate feature branches to the trunk every few days. This is our first step to real continuous integration and we start dreading code review less. This highlights some other issues with our stories though. They are still too big and many have dependencies on other stories. We keep working to drive the size down and make sure they represent a very small request and response from a user. Our goal is no story requiring more than 3 days to complete.

To address uncertainty for story implementation, we decide to use [BDD](https://lizkeogh.com/behaviour-driven-development/) to uncover requirements and aid in story breakdown and estimation.

Testing effort is becoming apparent as well. It’s taking too long to find integration issues and the end to end testing is really hurting our capacity. To address these, we start implementing [**contract tests**](https://martinfowler.com/bliki/ContractTest.html) to back up the integration testing. We also re-design our integration testing to focus on communication between pairs of components instead of the overall behavior of two or more components, since that’s just another end to end test. For our end to end tests, we focus on value we are wanting to achieve. We start to identify what we are trying to discover with E2E and find that a majority of that can be done with component functional testing. That would allow developers to build and execute those tests before committing code and to get feedback instantly instead of waiting for the build to find issues. Adding the BDD process to story refining makes this much easier to do. We begin reducing our E2E footprint.

### **Daily Delivery**

![By Land Rover MENA — Virgin Voyage | Land Rover Celebrates Production of First New Discovery Sport, CC BY 2.0, [https://commons.wikimedia.org/w/index.php?curid=38475164](https://commons.wikimedia.org/w/index.php?curid=38475164)](/bryanfinster.com/media/1__bAsLr4kTZa0SJCWKBDaSgg.jpeg)
By Land Rover MENA — Virgin Voyage | Land Rover Celebrates Production of First New Discovery Sport, CC BY 2.0, [https://commons.wikimedia.org/w/index.php?curid=38475164](https://commons.wikimedia.org/w/index.php?curid=38475164)

We’ve seen some real improvement moving to weekly delivery. It’s taking much less [**lead time**](https://leanandkanban.wordpress.com/2009/04/18/lead-time-vs-cycle-time/) to get features from idea to production. We’ve even started predicting and measuring value delivered, our first steps to [**hypothesis driven development**](https://www.thoughtworks.com/insights/blog/how-implement-hypothesis-driven-development). We have a test suite that gives us confidence and it’s giving us feedback from the pipeline in less than an hour from the time code reaches the trunk. We still have some extra process required for resolving production issues and our MTTR, the time from a production issue occurring until a fix is applied, is more than 2 hours.

During retro, we identify some things impacting our MTTR:

1.  If we can reduce our build and test time, it will take us less cycle time to apply a fix.
2.  Smaller changes make it even easier to locate issues early, but our three-day story size means many changes are still pretty big.

Examining our architecture, we see many opportunities to break things up into smaller components. Not only will that make each one faster to build and test, but it will enhance or horizontal scaling and reusability. With our improved monitoring, contract testing and integration testing maturity, we can begin dealing with more moving parts. However, the first step is more test optimization. When we look at the metrics, our integration testing is fragile when we integrate with external dependencies. It’s also requiring complicated data setup when executing a PUT, POST, or DELETE test.

To resolve the testing constraint, we bring in service virtualization tools. We start with internal services as a proof of concept and then sell the value to other teams we depend on. This accelerates testing in the build considerably by removing the risk of service unavailability and removing the complexity of the test data management.

To take advantage of this speed and accelerate value delivery, we start focusing on driving most story sizes down to one day of effort. Not only does this drive even more focus to the core value of the story, but the business starts seeing usable value even faster. This speed of delivery expands the trust and partnership with the business to new levels and they begin running small feature experiments instead of trying to dump everything into a single batch of change.

The results are what we expected. Our MTTR drops significantly. Not only is breaking change easier to locate, but it’s easier to reason about because smaller, tested changes result in more concise code. Build times are reduced and we no longer need to have a risky snowflake process for fixes or wake up other teams when their components are unavailable for integration testing when we are trying to verify and deploy a defect fix.

### **Daily Delivery per Developer**

We have high morale. We’ve seen that we can make significant improvements to our quality of life though disciplined improvement of our delivery cadence. Production impact is way down and we are running experiments to find better tools or architecture patterns to make our product easier to deliver. Everyone on the team understands the expectation that every change is destined for production and needs to be solid before commit. We are making suggestions to the business for new features we think the customers will enjoy and the business is prioritizing those. Our integration testing is virtualized. Contract breaks are found seconds after they happen during coding. We’ve been expanding our use of feature flags so that we can activate features on demand after they’ve been deployed. We have boring, drama free installs. Removing the authorization in the pipeline, we enable **continuous deployment**.

### Common excuses for not executing CI/CD

#### “We don’t need to release features every day”

Standardized daily deployment isn’t about feature delivery. Features are a tertiary priority. The primary reason for daily deployment is that it provides a safe way to deliver production impacting fixes. How many times have you attempted to repair production only to have that repair cause additional impact? In my career, I’ve seen it countless times. Root cause for the additional impact is typically nonstandard process and bypassing quality for the sake of speed. That’s never an appropriate action. Having a standardized, automated, and fast way to verify a code change and deploy it without human touch protects our business when minutes count. It isolates defects to the only thing humans should do; committing code to version control.

#### “We aren’t mature enough”

Maturity doesn’t come from time, it comes from practice. You don’t “become” mature at Scrum, Kanban, or CI; you get better at them. If you don’t start, you won’t get better. If you don’t have an improvement goal, you won’t get better. Driving down delivery cadence builds **high performing, high morale teams**. A high performing team who are experts of their domain and have the discipline to automate everything possible and focus on improvement is a strategic asset. How many do you have? How many do you want? Having worked on one, would you volunteer to go back to a team that cannot deliver as quickly? You don’t need, or even want, teams of “rock stars”. You have the people who can do this on your teams now. Give them the tools, training, goals, and freedom. Let them run!

Reducing delivery cadence is the **driver of maturity**, not something that mature teams decide to do.
