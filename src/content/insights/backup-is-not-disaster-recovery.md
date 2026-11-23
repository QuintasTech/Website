---
title: "Backup is not disaster recovery: how to test whether you can actually recover"
summary: Why successful backup jobs are not proof of recoverability, and how to build and test a real recovery plan.
date: 2026-08-18
author: Quintas Infrastructure Practice
readTime: 6 min read
capability: infrastructure
---
Most organizations can say with confidence that their backups run every night. Far fewer can say how long it would take to bring the business back after losing a data center, a cloud region or every server to ransomware. Those are different questions, and the second is the one that matters.

## The difference

**Backup** is a copy of data. **Disaster recovery** is the ability to restore whole services, in the right order, within a time the business can tolerate. It includes the infrastructure to restore onto, the network and identity services that everything depends on, the runbooks and the people who know how to use them.

## Set targets with the business

For each critical service, agree two numbers:

- **Recovery time objective (RTO):** how long the service can be unavailable.
- **Recovery point objective (RPO):** how much data, measured in time, the business can afford to lose.

These targets should come from the business, not IT. They drive the cost of the solution. An RTO of four hours for every system is expensive; most organizations have a small number of truly critical services and many that can wait a day or more.

## Map dependencies

Applications rarely stand alone. An ERP system needs databases, identity services, DNS, file shares, network connectivity and possibly integrations with other systems. Restoring it first is useless if Active Directory is not running. Document the dependency chain and use it to define recovery order.

## Protect against ransomware specifically

Modern ransomware targets backups first. Make sure you have:

- **Immutable or offline copies** that cannot be altered or deleted, even by an administrator account.
- **Separate credentials** for the backup system, protected with MFA and not joined to the main directory.
- **A clean recovery environment** where you can restore and check systems before reconnecting them.
- **Retention long enough** to go back before an intrusion that may have been dormant for weeks.

## Test properly

A restore of a single file proves very little. Build a testing program with increasing levels of realism:

1. **Restore tests** of individual systems, verifying the application works, not just that files came back.
2. **Tabletop exercises** where the team walks through a scenario and finds gaps in the plan.
3. **Partial failover** of a group of related services to the recovery site.
4. **Full recovery exercises** at least annually for critical services, measured against RTO and RPO.

Record how long each step took and what went wrong. The first full test almost always takes much longer than planned. That is the point of testing.

## Keep the plan alive

Every infrastructure change can break a recovery plan. Review the plan after major changes, keep runbooks where people can find them during an outage (not only on the systems that failed) and make sure more than one person knows how to execute them.

Quintas designs, implements and tests disaster recovery for enterprises, on premises and in the cloud. [Ask us](/contact/) about a recovery readiness review.
