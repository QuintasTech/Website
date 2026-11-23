---
title: "Microsoft 365 security baseline: ten settings worth checking today"
summary: Ten configuration checks that close the most common gaps in enterprise Microsoft 365 tenants.
date: 2026-07-02
author: Quintas Security Practice
readTime: 5 min read
capability: security
---
Microsoft 365 ships with good security capability, but much of it is off by default or configured loosely to avoid breaking things on day one. Many tenants are never revisited after migration. These ten checks close the gaps we see most often.

## 1. Multi-factor authentication for every account

Not just administrators. Use Conditional Access to require MFA for all users, and prefer phishing-resistant methods such as the Microsoft Authenticator app with number matching, FIDO2 keys or Windows Hello for Business over SMS.

## 2. Block legacy authentication

Older protocols such as basic authentication for POP, IMAP and SMTP bypass MFA. Block them with Conditional Access and find out who still depends on them before you do.

## 3. Separate admin accounts

Administrators should use dedicated cloud-only admin accounts, not their everyday mailbox account. Use Privileged Identity Management where licensed so that admin rights are granted just in time.

## 4. Limit global administrators

Keep the number of Global Administrators small, typically between two and four, and use more specific roles for everything else.

## 5. Emergency access accounts

Create two break-glass accounts excluded from Conditional Access, with long random passwords stored securely, and alert on any sign-in.

## 6. Review external sharing

Check SharePoint and OneDrive sharing settings. "Anyone" links are convenient and frequently unnecessary. Set sensible defaults and expiry dates.

## 7. Turn on audit logging and keep it

Make sure unified audit logging is on and that retention meets your investigation and compliance needs. During an incident, missing logs are the most common obstacle.

## 8. Protect email

Configure SPF, DKIM and DMARC for every sending domain, and move DMARC toward an enforcing policy. Review Defender for Office 365 policies for safe links, safe attachments and impersonation protection.

## 9. Restrict user consent to apps

By default, users may be able to grant third-party applications access to their data. Restrict consent to verified publishers or require admin approval.

## 10. Use Secure Score as a to-do list

Microsoft Secure Score lists recommended actions ranked by impact. Not every item applies to every organization, but it is a useful, free starting point for prioritizing work.

## Make it stick

Configuration drifts. Review these settings quarterly, document exceptions and who approved them, and alert on changes to Conditional Access policies and admin role assignments.

Quintas runs Microsoft 365 security assessments and remediation for enterprises across the US. [Ask us](/contact/) for a tenant review.
