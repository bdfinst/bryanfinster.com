---
title: '5 Minute DevOps: Organizing for Failure'
headerImage: ../media/1__9oW8BN2UsY8i3Pv8krGhjA.png
description: >-
  There are many lessons we can learn from manufacturing. Failure is one of
  those.
date: '2020-06-22T21:25:47.390Z'
tags: 
  - quality
slug: /@bdfinst/5-minute-devops-organizing-for-failure-6eec67b86f82
---

<img src="../media/1__9oW8BN2UsY8i3Pv8krGhjA.png" width="50%"></img>

I recently saw a documentary on the history of the Ford Edsel. There were so many lessons on the UX research, design, manufacturing, and marketing of Ford's new brand that apply to developing any product. I suggest everyone look into it. Since I only have 5 minutes we're going to focus on Ford's quality process for the Edsel.

In 1958, Ford started to manufacture the Edsel. Since this was an entirely new make, they didn't yet have an assembly line for it. So, they shared the line with other Ford passenger cars. The Edsel wasn't just new bodywork. It had a new engine and more complicated assembly with many innovative, and complicated, options. To accommodate the expected sales, they modified the line so that every eighth car was an Edsel. This, of course, lead to constant context switching on the assembly line. Also, since the car was named for Henry Ford's son, the previous chairman for whom the United Auto Workers had no love lost, there were occasional "assembly challenges". However, Ford had a well defined QA process that would keep the line moving.

Ford's QA process made sure that dealers got only the best Ford could deliver.

* As each car rolled off the line, it went through road tests and quality inspection and was given a quality score.
* All of the quality scores for the day's production were averaged and if the average daily quality score met the minimum, the cars were shipped to the dealerships.

Since Edsel's represented 1/8th of production and their quality scores were averaged in with the other 7/8ths, cars often shipped to dealerships with major issues to be resolved. This process worked fine for Ford until Toyota began disrupting the market.

The Toyota production system was created to reduce costs and increase quality so that they could compete. Core to the TPS is the reduction of waste by minimizing batch size, inspecting quality at every step, and preventing poor quality from moving to the next step. They made quality concurrent with manufacturing. This proved highly effective for increasing market share and allowing them to rapidly pivot to market needs. The Toyota system is something other manufacturers have worked to emulate for more than 50 years.

Ford's quality process sounded AWFULLY familiar to my experiences in the past delivering software.

* Develop features, often with shifting priorities and pressure to meet deadlines for the scheduled release.
* Throw it over the wall to the testing team who logs defects
* A go/no-go decision is made on the large batch of changes based on the criticality of the defects.
* If the minimum quality is reached to ship, then the release goes to the customers and an operations team fixes the defects based on customer complaints.

This process hasn't been a viable business model for manufacturing for more than 50 years and yet it's all too common in software development.

A friend of mine told me that his organization's QA team had built out a framework to make it easy for developers to fully test every change on their desktop. They were teaching teams TDD and BDD and were moving quality checks as close to the source of defect creation as possible. They were focusing also on the speed of feedback. A developer could get quality feedback from a fully integrated test in less than 3 minutes. They were taking Toyota's lessons to heart and rapidly improving the teams' abilities to deliver.

My friend also told me that one of the development managers in his organization is pushing back on the whole idea. "Why are we wasting time on this? Why are we asking developers to test? We have a testing team." Attitudes like this hurt the bottom line.

Is your organization executing an actual continuous delivery development process with small, tested changes and rapid quality feedback to the developers? If not, when will you finally catch up to where manufacturing disruptors were over 60 years ago? Software is eating the world, but only for those who can move from artisanal development to modern software delivery.
