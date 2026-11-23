---
title: "Life after the VMware licensing changes: your options compared"
summary: A vendor-neutral look at staying, moving to another hypervisor or shifting workloads to the cloud.
date: 2026-07-14
author: Quintas Infrastructure Practice
readTime: 7 min read
capability: infrastructure
---
Since Broadcom acquired VMware, the move to subscription-only licensing and bundled product editions has changed the economics of virtualization for many enterprises. Some have seen renewal quotes rise sharply. Others have found the new bundles a reasonable fit. Either way, most IT leaders now feel they should at least evaluate their options before the next renewal.

There is no single right answer. Here is how we think about it.

## Option 1: Stay on VMware

For many organizations this remains the right choice, at least for now.

**When it makes sense:** a large, mature VMware estate; deep in-house skills; heavy use of features such as NSX or vSAN; third-party tools and backup integrations built around vSphere; limited appetite for change.

**How to do it well:** right-size your core count before renewal, check which bundle actually matches what you use, consider consolidating clusters to reduce licensed cores, and negotiate term length deliberately.

## Option 2: Move to another on-premises platform

The main alternatives are:

- **Nutanix AHV**, a hypervisor included with Nutanix's hyperconverged platform, with mature management and migration tooling.
- **Microsoft Hyper-V** and **Azure Local** (formerly Azure Stack HCI), attractive for Microsoft-centric organizations and those planning a hybrid cloud strategy.
- **Open-source options** such as Proxmox VE or KVM-based platforms, which can work well for teams with strong Linux skills and simpler requirements.

**What to check:** support for your guest operating systems and applications, backup and disaster recovery integration, monitoring tools, the migration path for existing VMs, and the skills your team will need.

## Option 3: Move workloads to the public cloud

For some workloads, especially those that were already candidates for modernization, the licensing change is a good prompt to move to Azure, AWS or Google Cloud. Managed VMware services in the public clouds also exist, though licensing applies there too.

**Be careful:** lifting and shifting everything to cloud virtual machines can cost more than staying put. Treat it as an application-by-application decision.

## Option 4: A mix

Most enterprises will end up with a combination: VMware retained for the most complex workloads, a second platform for general-purpose servers, and the cloud for workloads that benefit from it. A mixed estate is more to manage, so standardize tooling for backup, monitoring and automation across platforms where possible.

## How to decide

1. **Inventory your usage.** Cores, VMs, features actually in use and integrations.
2. **Model total cost over five years** for each option: licensing, hardware, migration effort, training and any tooling changes.
3. **Assess risk.** Application support statements, the skills gap and migration complexity.
4. **Pilot.** Migrate a representative set of non-critical workloads before committing.
5. **Time the decision.** Start at least nine to twelve months before your renewal so you are negotiating with real alternatives.

Quintas works across VMware, Nutanix, Microsoft and the major clouds and has nothing to gain from any particular answer. [Ask us](/contact/) for an independent virtualization review.
