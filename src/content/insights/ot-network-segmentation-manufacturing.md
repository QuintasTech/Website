---
title: "OT network segmentation for manufacturing plants: a step-by-step approach"
summary: How to segment plant networks into zones and conduits without disrupting production.
date: 2026-08-04
author: Quintas Security Practice
readTime: 7 min read
capability: security
industry: manufacturing
---
Segmentation is the single most effective control for reducing risk in operational technology. A flat plant network lets an infection on one engineering laptop reach every controller in the building. A segmented one contains it. Yet many plants still run flat networks because segmenting a live production environment feels risky.

It does not have to be. Done in stages, segmentation can be introduced with little or no downtime.

## The model

The ISA/IEC 62443 standards describe networks in terms of **zones** (groups of assets with similar security needs) and **conduits** (the controlled paths between them). The older Purdue model describes levels from field devices (level 0) up through control, supervisory, operations and enterprise systems. You do not need to follow either rigidly, but both give a shared language for IT and plant teams.

A typical target design looks like this:

- **Enterprise zone:** corporate IT, email, ERP.
- **Industrial DMZ:** the only place where IT and OT systems exchange data, holding services such as historian replicas, patch servers and remote access gateways.
- **Site operations zone:** MES, plant historians, engineering workstations.
- **Cell or area zones:** one per production line or process area, containing its PLCs, HMIs and drives.
- **Safety systems:** isolated further still.

## Step 1: Map communication flows

Use passive monitoring to record which devices talk to which, on which protocols and ports, over a representative period that includes shift changes, batch starts and maintenance. This becomes the evidence for your firewall rules and shows dependencies nobody documented.

## Step 2: Design zones around the process

Group assets by production line, process area or criticality rather than by device type. Ask the plant engineers: if this line goes down, what else must keep running? Zones should match how the plant actually operates.

## Step 3: Build the industrial DMZ first

Separating IT from OT gives the biggest reduction in risk. Place a firewall pair between enterprise and plant networks, move shared services into the DMZ, and remove any direct connections. Many plants do this in a single planned shutdown.

## Step 4: Start in monitor mode

Deploy internal firewalls between zones with rules that allow everything but log all traffic. Compare the logs with your flow map. When you are confident nothing legitimate is missing, switch to enforcing rules one zone at a time, during maintenance windows, with engineers on hand to roll back.

## Step 5: Deal with the awkward cases

- **Flat VLANs with mixed devices** may need re-addressing. Plan this carefully; changing a PLC's IP address can require program changes.
- **Vendor-managed equipment** may need its own zone with tightly controlled remote access.
- **Wireless** devices such as tablets and AGVs need their own segment and strong authentication.

## Step 6: Keep it maintained

Segmentation degrades if nobody owns it. Put firewall rule changes through a joint IT/OT change process, review rules at least annually and monitor for new devices appearing in the wrong zone.

## What it takes

For a single mid-sized plant, assessment and design typically take four to eight weeks, with implementation spread over several maintenance windows. Multi-site manufacturers benefit from designing a standard pattern once and repeating it.

Quintas designs and implements OT segmentation for manufacturers, working alongside your engineers to keep production running. [Contact us](/contact/) to plan an assessment.
