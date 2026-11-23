---
title: Zero trust in plain English
summary: What zero trust actually means, what it does not, and where an enterprise should start.
date: 2026-09-01
author: Quintas Security Practice
readTime: 5 min read
capability: security
---
Zero trust is one of the most used and least understood terms in security. Vendors attach it to almost every product. Underneath the marketing is a simple idea worth understanding.

## The core idea

Traditional security assumed that anything inside the corporate network could be trusted. Firewalls protected the perimeter, and once you were in, you could reach most things. That model has broken down: users work from anywhere, applications live in the cloud, and attackers who get inside move freely.

Zero trust replaces "trust but verify" with **"never trust, always verify."** Every request to access a resource is checked, whatever network it comes from, based on:

- **Who** is asking (strong identity, verified with MFA).
- **What** device they are using (managed, patched, healthy).
- **What** they are asking for (only the access they need, for as long as they need it).
- **Context** such as location, time and behavior.

## What it is not

- **Not a product.** No single tool delivers zero trust. It is an approach that many tools support.
- **Not a project with an end date.** It is a direction of travel.
- **Not about distrusting employees.** It is about not relying on network location as proof of trustworthiness.

## The building blocks

1. **Identity.** A single identity provider, MFA everywhere and Conditional Access policies that consider device and risk.
2. **Devices.** Managed endpoints with compliance checks, so access can depend on device health.
3. **Least privilege.** Role-based access, just-in-time admin rights and regular access reviews.
4. **Segmentation.** Breaking networks and workloads into smaller zones so a compromise cannot spread.
5. **Application access.** Replacing broad VPN access with access to specific applications through identity-aware proxies or zero trust network access (ZTNA) services.
6. **Visibility.** Logging and monitoring across identity, devices, network and applications.

## Where to start

Most organizations get the biggest early gains from identity: MFA for everyone, blocking legacy authentication, and Conditional Access requiring compliant devices for sensitive applications. From there, reduce standing admin privileges, then replace broad VPN access with application-level access.

Frameworks such as NIST SP 800-207 and the CISA Zero Trust Maturity Model provide useful structure for assessing where you are and planning next steps.

Quintas helps enterprises build practical zero trust roadmaps and implement them across Microsoft, Cisco, Fortinet, Palo Alto Networks and other platforms. [Talk to our security team](/contact/).
