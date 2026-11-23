---
title: Securing clinical networks and connected medical devices
summary: Practical steps healthcare organizations can take to protect connected medical devices that cannot be patched or secured like ordinary IT.
date: 2026-10-06
author: Quintas Security Practice
readTime: 6 min read
capability: security
industry: healthcare
---
Hospitals and clinics run thousands of connected devices: infusion pumps, imaging systems, patient monitors, lab analyzers, building systems. Many run embedded or outdated operating systems, cannot take security agents and are maintained by their manufacturers rather than hospital IT. They are also directly tied to patient care, which makes downtime unacceptable and attacks especially serious.

Protecting them takes a different approach from ordinary endpoint security.

## Know what is connected

Most healthcare organizations cannot produce a complete, accurate list of their connected medical devices. Passive discovery tools designed for clinical environments can identify devices on the network, their manufacturers, models, software versions and communication patterns, without interfering with them. Combine this with clinical engineering records to build a single inventory that both IT and biomedical teams trust.

## Assess risk device by device

Not every device carries the same risk. Consider:

- Does it store or transmit protected health information?
- Is it life-sustaining or critical to diagnosis?
- What known vulnerabilities affect its software, and has the manufacturer issued fixes?
- What does it need to communicate with?

Manufacturer documentation such as the Manufacturer Disclosure Statement for Medical Device Security (MDS2) helps answer these questions.

## Segment the network

Network segmentation is the most effective control for devices that cannot be patched:

- Place medical devices in dedicated network segments, grouped by type or clinical function.
- Allow only the communication each group needs, for example an imaging modality to its PACS server.
- Block internet access unless the manufacturer specifically requires it, and then only to known destinations.
- Separate guest and patient Wi-Fi completely.

## Control vendor access

Manufacturers often need remote access for maintenance. Route it through a single controlled gateway with named accounts, MFA, session approval and logging, rather than permanent connections set up per device.

## Build security into procurement

The best time to address medical device security is before purchase. Include security requirements in procurement: supported operating systems, patching commitments, a software bill of materials (SBOM), support for network segmentation and the expected security support lifetime. FDA premarket cybersecurity requirements for new devices have raised the baseline, but older devices remain in service for many years.

## Plan for downtime

Ransomware attacks on healthcare have shown how quickly clinical operations suffer when IT systems fail. Make sure downtime procedures exist for clinical systems, test them, and include medical devices and their dependencies in incident response plans.

## Work as one team

Clinical engineering, IT, security and clinical leadership each own part of the picture. Joint governance, with shared inventory, risk ratings and change processes, is what makes medical device security work in practice.

Quintas helps healthcare organizations assess and secure clinical networks and connected devices. [Talk to our security team](/contact/).
