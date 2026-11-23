---
title: "Ransomware on the plant floor: seven controls that make the difference"
summary: The controls that most often decide whether a ransomware incident stops production for hours or for weeks.
date: 2026-09-15
author: Quintas Security Practice
readTime: 6 min read
capability: security
industry: manufacturing
---
Manufacturing has become one of the most targeted sectors for ransomware. Attackers know that downtime is expensive and that pressure to restore production quickly makes victims more likely to pay. Many incidents that halt plants begin in corporate IT and spread, or simply take down the business systems that production depends on.

The good news is that a relatively small set of controls makes a large difference. These seven come up again and again in incident reviews.

## 1. Multi-factor authentication on remote access

Compromised VPN and remote desktop credentials are among the most common entry points. Require MFA for all remote access, including vendor access, and remove any remote access tools that bypass it.

## 2. An enforced boundary between IT and OT

An industrial DMZ with tightly controlled firewall rules stops ransomware spreading from the corporate network into the plant. Without it, a single infected laptop can reach every HMI and engineering workstation.

## 3. Immutable, offline backups

Attackers routinely look for and destroy backups before encrypting systems. Keep at least one copy that cannot be modified or deleted, and include OT assets: controller programs, HMI projects and engineering workstation images.

## 4. Privileged access control

Ransomware operators need administrator rights to spread widely. Separate admin accounts, remove local admin rights from users, use just-in-time elevation and protect domain controllers as the critical assets they are.

## 5. Endpoint detection and response

Modern endpoint detection and response (EDR) tools can spot and stop ransomware behavior on Windows servers and workstations. Deploy them across IT and on supported OT systems such as engineering workstations and historian servers, after testing with vendors where necessary.

## 6. Patching internet-facing systems quickly

Vulnerabilities in firewalls, VPN gateways and file transfer appliances are frequently exploited within days of disclosure. Maintain an inventory of internet-facing systems and patch critical vulnerabilities on them as an emergency.

## 7. A tested incident response plan that includes production

Know in advance who decides whether to shut down connections to plants, how to run production manually if business systems are unavailable, who to call for outside help and how to communicate with customers. Rehearse it with plant leadership, not just IT.

## Beyond the seven

Network monitoring in OT, application allow-listing on HMIs, security awareness training and asset inventory all add further protection. But if these seven are in place and working, most manufacturers will be in a far stronger position than they are today.

Quintas helps manufacturers assess ransomware readiness across IT and OT and close the gaps that matter most. [Talk to us](/contact/) about a readiness review.
