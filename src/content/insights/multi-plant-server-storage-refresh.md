---
title: Planning a server and storage refresh across multiple plants
summary: How multi-site manufacturers can standardize, sequence and fund an infrastructure refresh without disrupting operations.
date: 2026-06-30
author: Quintas Infrastructure Practice
readTime: 6 min read
capability: infrastructure
industry: manufacturing
---
In a multi-site manufacturer, infrastructure tends to accumulate rather than be designed. Each plant buys what it needs when it needs it, a few acquisitions bring their own hardware, and before long there are a dozen server and storage configurations across the business, each with its own support contract and renewal date.

A refresh is the best opportunity to fix that. It is also easy to get wrong.

## Start with the workloads, not the hardware

Before talking to any vendor, build an inventory of what actually runs at each site:

- Production-critical systems that must keep running if the WAN link drops (MES, historians, SCADA servers, label printing, local file shares).
- Systems that only need to be close to users for performance.
- Systems that are at the plant only because nobody moved them.

The third group is usually larger than expected and is the first candidate for consolidation into a central data center or the cloud. What remains at the edge defines the size of the plant footprint.

## Standardize on a small number of designs

Aim for two or three standard site designs (for example small, medium and large) rather than bespoke builds. Standard designs mean:

- One set of spares, one set of runbooks, one skill set.
- Faster deployment, because each site is a repeat of the last.
- Simpler support, because problems seen at one plant are understood at all of them.

Hyperconverged infrastructure is often a good fit for plant sites because it puts compute and storage in a small number of identical nodes that can be managed centrally. Larger sites or those with heavy storage needs may still be better served by separate servers and storage. Make the choice per design, not per site.

## Sequence the rollout

Do not start with the largest or most critical plant. Pick a mid-sized site with a cooperative local team as the pilot, prove the design and the migration runbook, then roll out in waves. Align each cutover with planned maintenance shutdowns where possible, and keep the old environment available for rollback until the new one has run through at least one full production cycle.

## Watch the hidden costs

- **Licensing.** Virtualization, operating system and database licensing can cost as much as the hardware, and licensing models have changed significantly in recent years. Model them over the full term.
- **Support co-termination.** Aligning support contracts to a single renewal date simplifies future planning and improves negotiating position.
- **Site readiness.** Power, cooling, rack space and network uplinks at older plants often need work before new hardware arrives.
- **Data migration time.** Moving tens of terabytes over plant WAN links takes longer than people assume. Plan for seeding by physical transfer if needed.

## Fund it in phases

A multi-year phased refresh is easier to fund than a single large purchase, and it lets you adjust the design as you learn. Financing and as-a-service consumption models from the major manufacturers can also turn a capital project into a predictable operating cost, which some finance teams prefer.

## A realistic timeline

For a business with five to fifteen plants, a typical program runs nine to eighteen months: two to three months of assessment and design, a pilot site, then waves of two to four sites at a time.

Quintas plans and delivers infrastructure refreshes for multi-site manufacturers, from assessment and vendor-neutral design through deployment and ongoing support. [Start a conversation](/contact/) about your next refresh.
