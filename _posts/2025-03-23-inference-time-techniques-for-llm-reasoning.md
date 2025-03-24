---
layout: post
title: Inference-Time Techniques for LLM Reasoning
date: 2025-03-23 09:00:00-0400
description: An overview of different techniques to improve LLM reasoning capabilities at inference time, from prompting strategies to self-improvement methods.
tags: [LLM, "Prompt Optimisation", reasoning, AI]
categories: AI-techniques
---

> **Disclaimer**: Prompt optimisation is a dynamic field, new tricks are being developed every day, so stay tuned!

This page outlines various prompting techniques that can significantly improve LLM's reasoning capabilities during inference. While these methods enhance performance, they also increase input prompt length or require multiple prompts, resulting in higher computational costs.

<br>

### 1. CoT Prompting Techniques

Chain-of-Thought (CoT) prompting encourages LLMs to break down complex reasoning into intermediate steps, similar to how humans solve problems. This approach helps models tackle multi-step reasoning tasks more effectively by providing a structured thinking path.

There are several CoT variants:

- **Few-shot CoT**: Provides examples of step-by-step reasoning before asking the model to solve a problem
- **Zero-shot CoT**: Uses simple prompts like "Let's think step by step" without examples
- **Analogical prompting**: Instructs the LLM to generate relevant examples by itself before solving

_Effectiveness hierarchy:_

```
┌────────────────────────┐
│ Most Effective         │
├────────────────────────┤
│ Analogical Prompting   │ ← (LLM produces examples close to human-generated one => initiating reasoning)
├────────────────────────┤
│ Few-shot CoT           │ ← (Human provides examples)
├────────────────────────┤
│ Zero-shot CoT          │ ← ("Let's think step by step")
├────────────────────────┤
│ Zero-shot (basic)      │ ← (Direct question)
├────────────────────────┤
│ Least Effective        │
└────────────────────────┘
```

<br>

### 2. LLM as a prompt optimiser

Optimiser can include two LLMs:

1. For generating better prompts
2. For prompt evaluation

<br>

### 3. Least-to-most prompting

A prompt engineering method that increases the problem-solving capabilities of LLMs by breaking down complex problems into a series of simpler subproblems that get executed sequentially. Implementation can be done by chaining 3 prompts:

- Generate/find examples and decompose them
- Decompose original task
- Solve subproblems

<br>

### 4. Self-Discover

Instruct the LLM to compose reasoning structures for each task (2 stages):

- Discover the structure
- Ask to solve according to the structure

<br>

### 5. Self-Consistency

This technique involves generating multiple answers and selecting the most consistent final answer. It significantly boosts performance compared to single-path generation, but increases token usage in n times (n - number of generated answers).

<br>

### 6. Tree of Thoughts (ToT)

This approach extends CoT by exploring multiple reasoning paths in parallel, evaluating (by some trained evaluator model) the intermediate steps, and selecting the most promising branches (can reduce costs by cutting down non-promising paths if there is a good evaluator).

<br>

### 7. Iterative Self-Improvement

Methods like Reflexion and Self-Refine are presented, where LLMs generate feedback on their own outputs and iteratively refine them. Self-debugging for code generation is also covered.

<br>

### 8. Limitations of Self-Correction

Self-correction without an oracle verifier can sometimes hurt performance, as LLMs may incorrectly judge their own answers (and such an oracle is often unavailable).

<br>

### 9. Optimization of Inference Cost

Prompting Techniques can improve performance significantly, however bigger (more expensive) models provide boost on complicated tasks where smaller models struggle to show correct solutions.

<br>

## Overall

The presentation explores various techniques to improve LLM reasoning at inference time, emphasizing the importance of prompting strategies, generating multiple solutions, and iterative self-improvement. It also acknowledges the limitations of current self-correction methods and the ongoing research in this area.

<br>

## References

1. [LLM Agents Learning](https://llmagents-learning.org/sp25)
2. [Prompting Guide - Tree of Thoughts](https://www.promptingguide.ai/techniques/tot)
