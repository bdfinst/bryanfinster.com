---
title: '5 Minute DevOps: Effective Testing'
headerImage: ../media/1__JI1qdObQxEUJqk9jRH5gfA.png
template: post
draft: false
description: >-
  For anyone wishing to master CI/CD, there are few areas of study more
  important than the effective use of metrics and testing.
date: '2019-06-18T17:42:30.840Z'
category: devops
tags:
  - automation
  - quality
slug: 5-minute-devops-effective-testing-bd38fab50564
---

![[https://pixabay.com/en/developer-programmer-technology-3461405/](https://pixabay.com/en/developer-programmer-technology-3461405/)](../media/1__JI1qdObQxEUJqk9jRH5gfA.png" width="50%"></img>
[https://pixabay.com/en/developer-programmer-technology-3461405/](https://pixabay.com/en/developer-programmer-technology-3461405/)

### Protecting the Business

Developer driven software testing is not new. [Studies show](https://cloudplatformonline.com/rs/248-TPC-286/images/DORA-State%20of%20DevOps.pdf) that high performing organizations depend on tests written by developers instead of handing off to external teams of "Test Automators". Many vendors sell _The One Test Tool to Rule Them All_ and promise to take the thought out of testing. I've seen repeated demos of tools with slick UIs designed to dazzle those with budget control that promise to make testing so easy that even external contractors with no context can do it. I've been told that only unit tests are the responsibility of the development team. I have even heard that for developer productivity testing should be given to testing teams because, "developers have better things to do and aren't qualified to test anyway". Wow!

These misguided beliefs put the business at risk. Customers do not care about anything but outcomes and the data is on the side of better outcomes coming from DevOps principles and the practices of CI/CD. Tools don't solve that. Skilled, professional developers using effective tools do.

### CI/CD == Test

For anyone wishing to master CI/CD, there are few areas of study more important than the effective use of metrics and testing.

The entire point of a CD pipeline is to safely deliver value continuously to our end users. Code must **prove** to the pipeline that it is worthy of delivery and the pipeline's job is to prevent that delivery unless worth is proved and as fast as possible. To enable this, a [product team](https://medium.com/@bdfinst/5-minute-devops-designing-product-teams-33b82e6c1c5c) should have the following priorities:

1. Build and harden the CD pipeline.
2. Keep the pipeline green. If there is a broken build, drop everything and fix it. If you cannot ship, nothing else you are working on matters anyway. Make sure that change can be delivered on demand to protect the ability to fix production without heroics.
3. **When** (not if) a defect penetrates, harden the pipeline further by designing additional efficient tests for that defect.
4. Write features and ship them daily to continuously **test our ability to fix production** with minimal MTTR.
5. Get feedback about the status of the changes as fast as possible.

CI/CD is not tools. It's how we USE the tools. If you are claiming to execute a CD process, then the following are true.

* All tests for any code change are implemented and verified before code is committed in version control. Test Driven Development is a good idea. Test DURING Development is a non-negotiable.
* There is only a single path to production for any code change, no matter how critical. We always use our emergency process and we always test the same way.
* Tests version with the code.
* Test may not be deactivated for an emergency.
* While there may be a button to push to deliver to production, there are no other manual stage gates, human intervention, or handoffs to external teams once code has passed code review.

If the above are not true, it doesn't matter how well you can script Jenkins or how much you pay a testing team. You will never attain sustainable quality and you will be risking the business during every change, especially during an emergency.

The secret to CD is the right mindset: **it's always an emergency**. We architect the pipeline to standardize work and remove manual touch points because at 3:00am when a dumpster fire is raging in production, VP's are breathing down are necks, and we are operating on coffee and terror, we don't want to forget steps in our "hotfix process". We only use our standard process. It's already a nightmare, so let's not make it worse by cowboying changes in, ok?

All of the above have implications to how we architect our test plan.

### Building a Resilient Test Plan

Your test suite needs to be hardened against the realities of the chaotic world. In a fantasy testing world, networks never have latency, external dependencies are always up and always stable, and the teams who own those dependencies never deploy breaking API changes without versioning. It's fine to assume everything will work perfectly, until it's an emergency and your assumptions are sadly mistaken. You MUST trust your tests. You must not accept random failures in your tests. Your critical path pipeline tests must work even when everything around you is falling apart.

#### The Table Stakes: Solid Unit Tests

Unit tests are absolutely the foundation. They are also where most developers stop. While unit tests are crucial, they need to be used for the correct purpose; black box testing of complicated, isolated units of code. Typically, we are talking about classes, methods, or functions at this level. For architecting a Continuous Delivery test suite, we want it to be fast and efficient. We want to target testing at risky behaviors. 100% code coverage is neither reasonable nor efficient. There's no purpose in testing things like getter and setter methods unless they are doing something interesting. Testing Java's ability to assign data to a variable isn't useful unless we are developing the JVM. There are libraries full of good information on patterns and anti-patterns for unit testing. A favorite is [xUnit Test Patterns](http://xunitpatterns.com). It's a massive tome on proper testing and common anti-patterns that I highly recommend.

#### Meeting the Business Goals: Functional Tests

Unit testing will give a good view of how individual units will perform, but most applications are implementing some business flow. Testing that core business domain logic is critical and unit tests are ineffective at that. Many teams will jump immediately to end to end testing to solve this, but those are unstable (flakey test anti-pattern) and cannot effectively test all of the logic branches.

A better approach is using functional tests that independently test each business feature.

**_"Given I have £20 in the bank  
When I ask the cash machine for £20  
Then it should give me £20  
And debit my account."_**

**_Excerpt From:_** [**_Liz Keogh. "Behaviour-Driven Development."_**](https://leanpub.com/bdd)

Here we have a single business feature that can be implemented by an account service. This takes no special tools to implement, only the thought process of "I need to test this flow". Just like a good unit test, each functional test should be focused, be able to run in parallel, and should not directly integrate ouside the scope of the test.

#### Being a Good API Citizen: API Contract Tests

Communication interfaces are where most defects occur. It's obvious then that we should prioritize testing those interfaces even before implementing the behavior behind them. This is where [contract testing](https://martinfowler.com/bliki/ContractTest.html) and [contact driven development](https://medium.com/@carlescliment/an-experience-with-contract-driven-development-480a700b277) become important.

There are many poor ways of documenting API contracts, but only one correct way: contract tests and contract mocks documented and tested by the provider. A contract test in its basic form is a simple unit test of the shape of the contract.

Here's a simple example:

#### Playing Well With Others: Integration Tests

Contract tests give you a level of confidence during CI builds that you've not broken a contract or broken how you consume one but since they are mocked, they require another layer of test to validate the mocks.

Many people will use "Integration Test" to refer to the activity of testing business flows through several components, and End to End test. Other use it to refer to the functional test I mentioned above. In the references I mention below, they will refer to integration testing as the act of verifying communication paths between components; a shallow test where the consumer asks, "can I understand the response from my dependency?" The test should not attempt to test the behavior of the dependency, only that the response is understandable.

Integration tests have a weakness that architects of CD pipelines need to understand: they are flakey. You cannot promise that the dependency will be available when the CD flow executes. If that dependency is not available, it's still **your** team's responsibility to deliver. Remember the rules of CD above. You are not allowed to bypass tests to deliver. So, we have a conflict. How do we design a solution?

**Step 1:** Service Virtualization. Using [Wiremock](http://wiremock.org/), [Mountebank](http://www.mbtest.org/), or other related tools we can virtually integrate. These tools can act as proxies for actual dependencies and the [better ones](http://www.mbtest.org/) can replicate latency and handle more than just HTTP. In addition, they reduce the need for the test data management that is required for all but the simplest integration tests. Data is the hardest thing to handle in a test, so avoid it.

**Step 2:** Scheduled integration tests. When direct integration testing is needed, run it on a schedule outside the standard flow. Build alerts to tell you when it breaks and follow up on the causes for the breaks. If the dependency is unstable, keep track of how so you can rapidly detect when it's their instability vs. a breaking change they made or a problem with your virtual integration tests that needs addressing.

Using this method, you can reduce much of the flakiness of typical integration testing as well as repeatedly and quickly test for complex scenarios that cannot effectively be tested with less refined methods.

#### Verifying User Journeys: End to End Test

End to End testing tests for a flow of information and behavior across multiple components. Beware of vendors selling record and replay testing tools that purport to take the load off of the developer by simply testing the entire system this way. However…

_"_**_The main problem with Recorded Tests is the level of granularity they record. Most commercial tools record actions at the user interface (UI) element level, which results in Fragile Tests"_**

**_Excerpt From: Gerard Meszaros. "xUnit Test Patterns: Refactoring Test Code_**

End to End tests are not a substitution for [properly layered tests](http://xunitpatterns.com/Layer%20Test.html). They lack the granularity and the data control required for effective testing. A proper E2E test will be focused on a few happy path flows to verify a user journey through the application. Expanding the scope of an E2E into the domains better covered by other test layers results in the slow and unreliable tests. This is made worse if the responsibility is handed off to an external test team.

#### What Didn't We Test?

Exploratory testing is needed to discover the things that we didn't think of to test. We'll never think of everything, so it's important to have people on the team who are skilled at breaking things continuously trying to break things so that tests for those breaks can be added. Yes, this is manual exploration but it's not acceptance testing. If you use a checklist, you're doing it wrong.

#### Will it Really Operate?

Load testing and performance testing shouldn't be things left to the end. You should be standing those up and executing them continuously. There's nothing worse than believing everything is fine and then failing when someone tries to use it. Operational stability is your first feature, not an afterthought.

#### Entropy Happens

* What if that critical dependency isn't available?
* What happens if it sends you garbage?
* Cloud provider reboots for an upgrade or has an outage?
* Excessive latency?
* Coronal Mass Ejection?

The world is a messy place. Resiliency testing verifies that you can handle the mess in the best way possible. Design for graceful degradation of service and then test for it.

### Testing Ain't Easy!

Proper testing takes the right mindset and at least as much design as production code. It takes a curious, sometimes evil, mind and the ability to ponder "what if?" Proper test engineers don't test code for you; they help **you** test better. Tests should be fast, efficient, and should fully document the behavior of your application because tests are the **only** reliable documentation. If you aren't confident in your ability to test every layer, study it. It's not an added extra that delays delivery. It's the job.

If you're a professional developer and student of your craft, here's more references for deeper learning:

* [Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations](https://itrevolution.com/book/accelerate/)
* [Continuous Delivery](https://continuousdelivery.com/)
* [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
* [xUnit Test Patterns](https://www.oreilly.com/library/view/xunit-test-patterns/9780131495050/)
* [Charting a path to software resiliency](https://medium.com/walmartlabs/charting-a-path-to-software-resiliency-38148d956f4a)

**If you found this helpful, it's part of a larger** [**5 Minute DevOps series**](https://medium.com/search?q=%225%20minute%20devops%22) **I've been working on Feedback is always welcome.**
