# Part D: Real-World Thinking

### 1. Timelines are aggressive. What do you cut?
**I would cut the ML Prediction Engine.**
* **Why:** We can deliver 80% of the value with simple rules (e.g., "If bin > 90% full, alert driver"). ML is an optimization, not a Day 1 necessity.

### 2. How to prevent over-engineering?
**The "Rule of One":**
* One Database (PostgreSQL).
* One Language (TypeScript).
* No Microservices until >10k users.

### 3. Onboarding a new intern?
**Day 1 Goal: Ship to Production.**
* I assign a "Good First Issue" (e.g., UI text change) and walk them through PR -> Merge -> Deploy. This removes fear of the codebase immediately.