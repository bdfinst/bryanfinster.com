---
title: '5 Minute DevOps: Removing Drama from Delivery'
headerImage: ../media/1____C9bzYDswgXSgSJLSrt6bQ.png
template: post
draft: false
description: Doing "Done" wrong.
date: '2019-07-05T12:27:03.372Z'
tags:
  - culture
  - lean
slug: 5-minute-devops-removing-drama-from-delivery-10b7fa486ea9
---

![[© 2014 Zakeenahttps://www.sketchport.com/drawing/6706745665650688/none-desired](https://www.sketchport.com/drawing/6706745665650688/none-desired). Licensed under [CC-BY](http://creativecommons.org/licenses/by/4.0/).](../media/1____C9bzYDswgXSgSJLSrt6bQ.png" width="50%"></img>
[© 2014 Zakeenahttps://www.sketchport.com/drawing/6706745665650688/none-desired](https://www.sketchport.com/drawing/6706745665650688/none-desired). Licensed under [CC-BY](http://creativecommons.org/licenses/by/4.0/).

Has this ever happened to you or have you ever seen a support request like this?

> "We're trying to deploy a K8S cluster to our server, but it can't reach our vLAN network. We've opened an incident with the NOC but we can't solve this issue. We'd like to solve this problem by end of today. if it can't we'll be behind schedule and won't release our new system as planned.

> I'd really appreciate if someone could help us."

![By Brady Holt — Own work, CC BY 3.0, [https://commons.wikimedia.org/w/index.php?curid=11113736](https://commons.wikimedia.org/w/index.php?curid=11113736)](../media/1__H9xHcJgqy__rAj2mWJwqEHg.jpeg" width="50%"></img>
By Brady Holt — Own work, CC BY 3.0, [https://commons.wikimedia.org/w/index.php?curid=11113736](https://commons.wikimedia.org/w/index.php?curid=11113736)

### Order of Operations

2 x 5 + 3 = 16…

Doing things in the wrong order leads to the wrong answer.

Large projects fail or are challenged because we focus on things in the wrong sequence and not constantly verifying the results. One of the goals of continuous delivery is to make sure the order of operations is correct.

#### 1\. Understand the value to be delivered

Developers cannot deliver quality if we don't understand the value and goals. Context matters.

#### 2\. Build and deploy the first feature, "Hello world".

Deploy first. If you cannot deploy, then you cannot deliver the expected value and anything you cannot deploy is unfinished work waste. Even if what you build is entirely correct, if no one can use it or it's delivered late, it's still wrong. My first deliverable for any new UI or service is a health-check endpoint returning a simple object or a single line of HTML. Typically, lyrics from "Still Alive".

#### 3\. Build and deploy the next Minimum Viable Feature.

In a recent discussion, I explained that services should be deployed to production as soon as any non-breaking changes were available. The challenge back was that "the customer can't use it yet". That's true, but we now have more confidence that it's not going to immediately break anything when it's complete enough to use.

Our focus is always stability and hardening the pipeline. We use new features to do that, but we need to keep those features as minimal as possible. Not only does this limit our blast radius **when** it fails, but it minimizes waste. If the customer asks for something and we deliver towards that goal in small pieces, there comes a point where the customer may be delighted with less than they thought they needed originally or they discover that was the wrong thing to ask for in the first place. In either case, we discover that with the least cost possible.

#### 4\. Adjust

It'll be wrong. We make mistakes in what we ask for, how we define it, and how we implement it. So, we should aim to be minimally wrong. Deploy to production, check against the expected value, and do it again. The faster and smaller we can do this, the more confidence we have in the results.

#### 5\. GOTO 3

### Picking up the Pieces Sucks

It's too late to help someone when they've already driven off the cliff and are now desperate to find a way to get their months of hard work delivered. All we can do is pick up the pieces and help them understand what went wrong. Keep reminding people about the order of operations, because they may race to the deadline and get 16, but 30 delivers value.
