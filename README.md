# Badminton Data Center (BDC)

> Modern Google Apps Script framework for collecting, processing and managing badminton data from multiple providers.

---

## Overview

Badminton Data Center (BDC) is a modular framework built on Google Apps Script.

The project is designed to collect badminton data from multiple sources while keeping the codebase clean, modular and maintainable.

Current supported providers:

- BWF
- PBSI
- Custom Proxy

---

## Main Goals

- Single source of truth
- Clean architecture
- Modular design
- Spreadsheet as database
- Web App interface
- Minimal dependency
- Easy maintenance

---

## Project Structure

```
badminton-data-center
│
├── apps-script/
│   ├── Core.gs
│   ├── Api.gs
│   ├── Database.gs
│   ├── Main.gs
│   ├── index.html
│   └── appsscript.json
│
├── docs/
│   ├── API_REGISTRY.md
│   ├── ROADMAP.md
│   └── CHANGELOG.md
│
├── scripts/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Architecture

```
Browser

↓

index.html

↓

Main.gs

↓

Api.gs

↓

Core.gs

↓

BWF / PBSI / Proxy

↓

Database.gs

↓

Google Spreadsheet
```

---

## Design Principles

- Contract First
- Build Only What Is Needed
- Single Responsibility
- No Technical Debt
- No Hardcoded URL
- Proxy as Fallback
- Commit Driven Development

---

## Development Workflow

Every implementation follows:

Requirement

↓

Implementation

↓

Self Review

↓

Review

↓

Approval

↓

Freeze

---

## Coding Standards

- PascalCase for modules
- camelCase for methods
- UPPER_SNAKE_CASE for constants

---

## Version

Current Version

```
v2.0.0
```

Status

```
Development
```

---

## License

Private repository.

Internal development only.