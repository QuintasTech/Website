---
title: "IT/OT convergence: securing the plant floor without stopping production"
summary: A practical approach to bringing operational technology under the security umbrella while keeping lines running.
date: 2026-06-23
author: Quintas Security Practice
readTime: 7 min read
capability: security
industry: manufacturing
---
For most of their history, plant-floor systems were protected by isolation. PLCs, HMIs and SCADA servers sat on their own networks, maintained by engineers rather than IT, and rarely touched the internet. That isolation has been eroding for years. Remote vendor support, MES and ERP integration, cloud analytics and simple convenience have connected operational technology (OT) to the corporate network, often without anyone deciding that it should be.

The result is a large and poorly mapped attack surface sitting next to the systems a manufacturer can least afford to lose.

## Why OT is different

The instinct is to apply IT security practice directly to the plant. That usually fails, for good reasons:

- **Availability comes first.** In IT, a reboot to apply a patch is routine. On a production line it may mean scrapped product, a lengthy restart sequence or a safety review.
- **Equipment lives for decades.** It is common to find controllers and operator stations running operating systems long past vendor support, because the machine they control is still productive.
- **Vendors control the configuration.** Changing a validated system can void a warranty or a regulatory qualification.
- **Active scanning can break things.** Some older industrial devices react badly to network scans that IT tools consider harmless.

Good OT security accepts these constraints and works around them.

## A phased approach

### 1. Find out what is there

You cannot protect assets you do not know about. Start with a passive inventory: tools that listen to network traffic and identify devices, firmware and communication patterns without sending anything to them. Combine this with walk-downs and the engineering team's own records. Expect surprises: unmanaged switches, forgotten remote access modems, laptops that bridge networks.

### 2. Draw the boundaries

The most valuable single control in most plants is a properly enforced boundary between IT and OT. The Purdue model and the zones-and-conduits approach in ISA/IEC 62443 both give a useful vocabulary. In practice this means:

- An industrial DMZ between the corporate network and the plant, so that no traffic passes directly from one to the other.
- Firewalls that allow only the specific flows production needs, documented and owned.
- Separate zones inside the plant for areas that do not need to talk to each other.

### 3. Control remote access

Vendor and engineer remote access is one of the most common ways attackers reach OT. Replace ad hoc tools and always-on connections with a single brokered access path: named accounts, multi-factor authentication, approval per session, recording, and access that expires when the job is done.

### 4. Monitor without interfering

OT-aware monitoring tools understand industrial protocols and can flag unusual commands, new devices or changes to controller logic. Feed their alerts into the same security operations process as IT, with clear escalation to the plant engineers who understand what normal looks like.

### 5. Plan for patching realistically

Where patches can be applied, schedule them into planned maintenance windows and test them on a representative system first. Where they cannot, compensate: tighter segmentation, application allow-listing and removing unneeded services.

### 6. Rehearse recovery

Keep offline, tested backups of controller programs, HMI projects and engineering workstation images. Know how long a rebuild takes. A ransomware incident on the IT side can halt production even when OT is untouched, if the plant depends on IT systems to schedule, release or ship.

## Who owns it

The hardest part of IT/OT convergence is rarely technical. Plant engineering, IT and security each own part of the picture, and each has different priorities. Successful programs name a single accountable owner, agree shared change-control rules and involve plant staff from the start. Security that slows production down will be worked around.

## Where to start

If you do one thing this quarter, map every connection between your corporate network and your plants, including remote access paths. Most manufacturers find at least one they did not know about. From there, segmentation and controlled remote access deliver the largest reduction in risk for the effort.

Quintas helps manufacturers in North Carolina and across the US assess and secure plant networks without disrupting production. [Talk to our security team](/contact/) about an OT assessment.
