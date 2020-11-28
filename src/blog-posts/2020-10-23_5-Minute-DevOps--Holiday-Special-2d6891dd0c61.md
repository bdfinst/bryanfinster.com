---
title: '5 Minute DevOps: Holiday Special'
headerImage: ../media/1__CnhwWhi__i3M10FH__1RzBDw.jpeg
description: >-
  Ah, holiday traditions. Christmas carols, Black Friday, Cyber Monday, fruit
  cake, egg nog, and change feeze. It's that time of year again…
date: '2020-10-23T12:31:12.216Z'
tags: 
  - leadership
  - improvement
slug: /@bdfinst/5-minute-devops-holiday-special-2d6891dd0c61
---

<img src="../media/1__CnhwWhi__i3M10FH__1RzBDw.jpeg" width="50%"></img>

Ah, holiday traditions. Christmas carols, Black Friday, Cyber Monday, fruit cake, egg nog, and change feeze. It's that time of year again where companies everywhere stop allowing production changes. Let's chat about this.

<img src="../media/1__KzVUNZbgTLLlrWCOzpfzOw.jpeg" width="50%"></img>

Change freeze, if you're not aware, is the process of only allowing emergency patches to be deployed. This doesn't mean that work stops on coding features. It means that features being coded are held until after the freeze and then delivered.

Another concept to consider is inventory, one of the main wastes in Lean. In a supply chain, you control your inventory. You want just enough to buffer against demand, but you would really like to have the information to allow Just In Time flow of product with little or no inventory. In software supply chains, we do not create inventory (user stories, code changes) unless there is already demand, so we have the ability to have minimal user story inventory and no code change inventory because we can design a system to flow high-quality changes to production as soon as they are created.

In software, inventory is riskier than in a physical supply chain. No two software changes are ever the same. This means that quality cannot be assured before delivery. We can validate we didn't break previous changes, but we can only hope the current change is correct. This means we need feedback on every change from the end-user to find out. The larger the changeset, the more risk there is that we have problems.

<img src="../media/1__aHTzOo__xMWmERajm1vNfPw.jpeg" width="50%"></img>

So, back to change freeze. The teams are still building features, but their quality signal has been terminated. Yes, they are still testing (your team tests, right?) but they can only test for known poor quality. As the code inventory increases, the number of unknown defects also increases. When the freeze lifts, a giant batch inventory is converted to support calls.

So, why follow this tradition do this every year? Lack of confidence. The level of confidence that breaking changes can be prevented is too low. We can either accept this and perform the yearly ritual or try something else to reduce risk. I suggest two solutions.

1. This year, spend the holidays looking at your system of delivery. Identify the things that you aren't confident in and put an improvement process in place to gain confidence. Remove variance caused by manual processes and improve test efficiency and effectiveness. Make. Things. Better.
2. If a disciplined improvement process seems like too much work, just give the development teams a paid vacation so that no more defects are generated without the ability to detect them. It's just less risky.

If you have some other ideas for risk mitigation in software delivery, DM me on LinkedIn. Let's make things better for everyone.
