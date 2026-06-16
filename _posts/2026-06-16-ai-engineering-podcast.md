---
layout: post
title: Talking About AI Engineering in Production
date: 2026-06-16 09:00:00+0100
description: Notes from my DataTalksClub conversation on production AI engineering, evaluation, routing, token costs, and when to stop an AI pilot.
tags: [AI, LLMs, production, evaluation, talks]
categories: talks
---

The recording of my conversation with DataTalksClub is now live:
[How to Build AI that actually Ships in Production - Aleksandr Kim](https://www.youtube.com/watch?v=PosCx_4fwt0).

A good AI demo can be dangerously convincing.

The first version often looks useful. A model reads something, writes something, maybe answers a few test questions well. From the dev side, it can feel like the hard part is done.

Then production starts asking boring questions.

Can we measure whether the answer was actually useful? What happens when the data access or infrastructure is not ready? Which model should handle which task? How much are we spending on tokens? Who notices when the system quietly becomes worse?

That was the main thread of the conversation. We went from a BERT customer-support system at Kaspersky, where the real win was reframing 200 categories into the 20-30 that were actionable, to an Intuit agentic insights project that started as a chatbot and became automated Slack reporting after customer interviews.

We also talked about evaluation, routing, caching, token cost, and the harder skill of knowing when to abandon a project because the bottleneck is not the model.

Different technology, same old pattern: the model is rarely the whole product. The useful work is usually around it. Define the behavior. Connect it to a business outcome. Build the checks. Watch the cost. Be honest when the infrastructure is not ready.

That is the part of AI engineering I find most interesting: turning an impressive prototype into a workflow that behaves predictably when real users, real data, and real constraints show up.
