---
title: "Relocating a DR room without downtime: a practical checklist"
summary: The planning steps that keep services running when your disaster recovery site has to move.
date: 2026-11-17
author: Quintas DR & Relocation Practice
readTime: 6 min read
capability: disaster-recovery
---
Moving a disaster recovery room is unusual: the thing you are moving is the safety net for everything else. While it is in transit, you are exposed. Good planning shrinks that window to as close to zero as possible.

## 1. Build a complete inventory

List every server, storage array, network device, circuit and licence in the room. Record what each one protects, its dependencies and who owns it. Physical audits always find surprises.

## 2. Confirm recovery objectives

Agree the recovery point and recovery time objectives for each application before planning the move. They decide which systems need temporary protection while the room is offline.

## 3. Protect before you move

Stand up temporary protection for critical workloads first, such as cloud-based recovery or replication to another site. Never pull the last copy of anything.

## 4. Plan move groups

Group equipment by dependency, not by rack position. Each group gets a cutover window, a validation plan and a rollback plan.

## 5. Prepare the destination

Power, cooling, rack layouts, cabling and network circuits should be installed and tested before the first device arrives.

## 6. Move, rebuild and validate

De-install, transport securely, rack, stack and cable. Validate each service against its runbook before moving on.

## 7. Prove it with a failover test

The move is not finished until a recovery test passes at the new site. Document the result for your auditors and leadership.
