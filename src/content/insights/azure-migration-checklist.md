---
title: "Azure migration checklist: twenty things to settle before you move"
summary: The decisions on governance, identity, networking, cost and operations that make or break an Azure migration.
date: 2026-07-21
author: Quintas Cloud Practice
readTime: 6 min read
capability: cloud
---
Most cloud migrations that go wrong do so because of decisions that were never made, not because of technical problems during cutover. Use this checklist to make sure the foundations are in place before the first workload moves.

## Strategy and scope

1. **Why are we moving?** Cost, agility, data center exit, resilience? The answer shapes every later decision.
2. **Which workloads, in what order?** Assess each application and classify it: rehost, replatform, refactor, replace or retire.
3. **What does success look like?** Agree measurable outcomes before you start.

## Governance

4. **Management group and subscription structure** that reflects how you want to separate environments, business units and billing.
5. **Azure Policy** to enforce standards such as allowed regions, required tags and approved resource types.
6. **Naming and tagging standards**, including owner, environment, application and cost center.
7. **Landing zone design.** Use the Cloud Adoption Framework landing zone guidance as a starting point rather than building from scratch.

## Identity and access

8. **Microsoft Entra ID** integration with your on-premises directory, and a plan for service accounts.
9. **Role-based access control** with least privilege and Privileged Identity Management for admin roles.
10. **Conditional Access and MFA** for anyone managing the cloud environment.

## Networking

11. **Hub-and-spoke or Virtual WAN topology**, including how traffic is inspected.
12. **Connectivity to on-premises**: VPN or ExpressRoute, with sized bandwidth and redundancy.
13. **IP address plan** that will not collide with existing networks or future acquisitions.
14. **DNS design** for hybrid name resolution.

## Security and compliance

15. **Microsoft Defender for Cloud** enabled with a baseline posture policy.
16. **Logging** to a central Log Analytics workspace or SIEM, with retention agreed.
17. **Data classification and compliance requirements** mapped to regions and services.

## Operations and cost

18. **Backup and disaster recovery** for every workload, tested.
19. **Monitoring and alerting**, integrated with your existing operations process.
20. **Cost management**: budgets, alerts, reservation and savings plan strategy, and a named owner for cloud spend.

## Then migrate in waves

Start with a low-risk pilot to prove the landing zone, tooling and runbook. Move in waves of related applications, review after each one and adjust. Keep rollback options open until each workload has run successfully in Azure for an agreed period.

Quintas designs Azure landing zones and runs migrations for enterprises across the US. [Talk to our cloud team](/contact/) about your plans.
