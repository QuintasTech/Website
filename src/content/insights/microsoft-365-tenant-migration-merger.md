---
title: Microsoft 365 tenant-to-tenant migration after a merger or acquisition
summary: How to plan and run a Microsoft 365 tenant consolidation with minimal disruption for users.
date: 2026-09-22
author: Quintas Cloud Practice
readTime: 6 min read
capability: cloud
---
Mergers, acquisitions and divestitures almost always involve Microsoft 365. Two companies coming together want shared email, calendars, Teams and files. A divested business needs to leave. Moving users, mailboxes, OneDrive, SharePoint and Teams between tenants is well understood, but it touches every user and needs careful planning.

## Decide the end state first

- **Full consolidation** into one tenant is the most common goal and gives the best long-term collaboration.
- **Long-term coexistence** of separate tenants with cross-tenant collaboration features can work when businesses stay operationally separate.
- **Divestiture** moves a subset of users and data out to a new tenant.

The legal and business timeline usually drives the order. Day-one requirements often include shared calendars and the ability to find and message each other, which can be delivered through coexistence before migration.

## Plan the coexistence period

Migrations take weeks or months. During that time users in both tenants need to work together. Plan for:

- **Free/busy calendar sharing** between tenants.
- **Global address list synchronization** so people can find each other.
- **Teams external access or cross-tenant features** so chat works across tenants.
- **Mail routing** so messages to old and new addresses arrive correctly.

## Workstreams

1. **Identity.** Users need accounts in the target tenant, synchronized from on-premises directories where relevant. Decide how domains will move, since a domain can exist in only one tenant at a time.
2. **Mailboxes.** Microsoft's native cross-tenant mailbox migration or third-party tools can move mail, calendars and contacts.
3. **OneDrive and SharePoint.** Map sites and permissions carefully, as permissions often do not translate one to one.
4. **Teams.** Teams chats, channels and files require careful handling and specialist tooling.
5. **Devices.** Windows devices and mobile devices typically need re-enrolling into the new tenant's Intune.
6. **Applications.** Single sign-on applications registered in the old tenant need to be reconfigured.
7. **Security and compliance.** Retention policies, legal holds, sensitivity labels and eDiscovery must be considered before data moves.

## The cutover

Most organizations migrate in batches, with the domain move happening in a planned window, often a weekend. Communicate early and repeatedly, provide clear instructions for the first Monday, and staff the help desk heavily.

## Common mistakes

- Underestimating the time needed for Teams and SharePoint.
- Forgetting shared mailboxes, distribution lists and service accounts.
- Not checking legal hold and retention obligations before moving or deleting data.
- Leaving device re-enrollment until after cutover.

Quintas plans and executes Microsoft 365 migrations and consolidations for enterprises. [Talk to our cloud team](/contact/) about your integration timeline.
