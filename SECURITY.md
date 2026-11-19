# Security Policy

**Special Mark Technologies** (مؤسسة العلامة المميزة) and lead developer **Karim Khaleel (KaRaM ADeLaH)** take the security of the **Special Mark Tech** (`special-mark-tech`) application seriously. We appreciate the efforts of security researchers and the developer community in helping us keep our codebase and users safe.

## Supported Versions

We actively maintain and release security patches for the latest major release of the project. Older versions do not receive security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

## Scope

This security policy applies to the frontend React application, backend Express server (`server.ts`), and configuration files within this repository. When reporting issues, please focus on vulnerabilities such as:
* Cross-Site Scripting (XSS) or DOM manipulation flaws.
* Exposed API keys, environment variables (`.env`), or AI integration credentials (`@google/genai`).
* Server-side vulnerabilities, authentication bypasses, or insecure API endpoints in Express.
* Critical vulnerabilities in third-party `npm` dependencies (`package.json`).

*Note: Please do not report automated scanner outputs without a verified proof of concept.*

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub Issues, Discussions, or Pull Requests.**

Instead, please report them privately using one of the following methods:

1. **GitHub Private Vulnerability Reporting (Preferred):** Navigate to the **Security** tab of this repository, click on **Advisories**, and select **Report a vulnerability**.
2. **Email:** Send a detailed report directly to our security contact at **special@hotmail.com**.

### What to Include in Your Report
To help us triage and resolve the issue quickly, please include:
* A clear description of the vulnerability and its potential impact.
* Step-by-step instructions to reproduce the issue (Proof of Concept).
* The specific file paths, React components, server routes, or `npm` packages affected.
* Browser and environment details (if applicable).

## Disclosure & Response Timeline

We follow a coordinated disclosure process and aim to adhere to the following timeline:
* **Initial Response:** You will receive an acknowledgment of your report within **48 hours**.
* **Triage & Assessment:** Within **5 business days**, we will confirm whether the vulnerability is accepted or declined, along with an estimated timeline for a fix.
* **Resolution:** Once a patch is developed and tested, we will release a security update and publish a GitHub Security Advisory crediting your discovery (unless you prefer to remain anonymous).

We kindly ask that you give us reasonable time to address the issue before disclosing it publicly.
