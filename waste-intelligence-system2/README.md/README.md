# ♻️ Waste Intelligence System

![Status](https://img.shields.io/badge/Status-MVP%20Complete-success)
![Stack](https://img.shields.io/badge/Tech-Node.js%20%7C%20TypeScript%20%7C%20PostgreSQL-blue)
![Role](https://img.shields.io/badge/Focus-Founding%20Engineer-purple)

**A scalable, modular monolith designed to ingest, validate, and analyze IoT waste telemetry data.**

---

## 📖 Project Overview
This repository represents a "Vertical Slice" of the Waste Intelligence System. It demonstrates a pragmatic approach to building IoT infrastructure, prioritizing **development velocity** and **type safety** over premature optimization.

### 🎯 Key Objectives
1.  **Ingest** high-volume telemetry (Fill Levels, Battery, Location) via HTTP/MQTT.
2.  **Validate** data strictly at the edge using **Zod** to protect the database.
3.  **Analyze** trends asynchronously using a decoupled Python ML service.
4.  **Visualize** operations via a React Dashboard (planned).

---

## 🏗️ Repository Structure
This project is organized to separate concerns while keeping the codebase "Intern-Friendly."

| Folder | Description |
| :--- | :--- |
| **`/backend-api`** | **(Part B)** The Core Node.js + TypeScript API. Contains `app.ts`, `routes.ts`, and Zod schemas. |
| **`/docs`** | **(Part A)** Architecture Diagrams, Trade-off Decisions, and System Design logic. |
| **`/intern-plan`** | **(Part C)** 5-Day Sprint Plan, Onboarding Guide, and Sample Code Reviews. |
| **`real-world-thinking.md`** | **(Part D)** Strategic Q&A regarding timeline cuts and avoiding over-engineering. |

---

## ⚡ Quick Start (Backend)
I designed the backend to be "Clone & Run" to minimize onboarding friction for new interns.

### Prerequisites
* Node.js v18+
* npm

### Installation
```bash
# 1. Navigate to the backend service
cd backend-api

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

👉 **[View the Detailed Sprint Plan](intern-plan/sprint-plan.md)**
👉 **[View Sample Code Review](intern-plan/code-review-example.md)**

🧠 Technical Strategy (Why I built it this way)
1. Architecture: The Modular Monolith
Decision: I chose a Modular Monolith over Microservices.

Reasoning: At this stage (0-10k sensors), network latency and DevOps complexity are the enemies. A monolith allows us to share types, debug easily, and ship the MVP in days, not weeks.

👉 See full details in docs/architecture_decisions.md

2. Database: PostgreSQL (The "Boring" Choice)
Decision: Single PostgreSQL instance using JSONB for sensor logs.

Reasoning: We don't need the complexity of managing a separate Time-Series DB (InfluxDB) yet. Postgres handles JSONB efficiently enough for our current scale.

3. Safety: TypeScript + Zod
Decision: Strict Mode enabled; Runtime validation on all inputs.

Reasoning: This acts as a safety net for junior engineers, preventing "undefined" errors from crashing production.

👥 Intern Management & Onboarding
As a Founding Engineer, my role includes mentoring. I have prepared a structured Week 1 Sprint to get interns shipping value immediately.

Frontend Goal: Ship a "Hello World" Dashboard using Component Libraries (Day 1-5).

ML Goal: Move from Mock Data -> Logistic Regression Model (Day 1-5).

Code Review Philosophy: Focus on architectural patterns (e.g., Fixing N+1 Queries) rather than syntax nitpicking.

👉 See the full schedule in intern-plan/sprint-plan.md

🔮 Future Roadmap
Phase 1 (Now): Solid Monolith, Single DB, REST API.

Phase 2 (>10k Sensors): Introduce InfluxDB for time-series data; move Ingestion to Go/Rust.

Phase 3 (>1M Sensors): Split into Microservices (Ingestion vs. Analytics vs. User Mgmt).

Submitted by: Ayushi

Founding Engineer Candidate