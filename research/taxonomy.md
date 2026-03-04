# AI-XP Taxonomy: Formal Definitions and Claims

## 1. Paradigm & Mindset
- **Software Engineering 3.0 (SE 3.0)**: The transition from manual (1.0) and assistive (2.0) coding to an agentic paradigm where AI acts as an asynchronous, autonomous orchestrator.
- **Vibe Coding**: The anti-pattern of delegating technical judgment to probabilistic models without rigor, resulting in technical debt, high code churn, and unmaintainable abstractions.
- **Akita-Driven Model**: A mindset of technical skepticism where the engineer acts as a "Relentless Controller." It emphasizes fundamentals (hardware, VRAM, TFLOPs, Algebraic Probability) over high-level abstractions.

## 2. AI-XP Framework (The Three Loops)
- **VISION**: Long-term planning, architectural alignment, and creation of "Intermediate Representations" (IR).
- **ADAPT**: Daily implementation cycle using Agentic TDD (Red-Green-Refactor).
- **LEAP**: Asynchronous architectural audits, massive refactoring, and DevSecOps "self-healing."

## 3. Defensive Engineering (Guardrails)
- **Agentic TDD**:
  - **Mandatory RED Phase**: No production code is generated without a failing test proof.
  - **Ephemeral Folders**: Tests run in runtime-generated, non-persistent directories (`SecureRandom.hex(8)`).
  - **Teardown Cibernético**: Absolute `rm -rf` of test environments after each cycle.
- **Active Sandboxing**:
  - **AgentFS**: SO simulation (Wasm/local) to prevent agents from accessing host root (/) or sensitive creds (.env, .aws).
  - **Vibe-Jail**: Restricting agent I/O to specific subdirectories via System Prompts and Docker.
- **Recursive Loop Guillotine (Hard Stop-Loss)**:
  - **Protocol**: If a generation fails or breaks build -> `git restore .` + `/clear` (Context Flush). Do NOT argue with the AI or dump stacktraces into the context.

## 4. Prompt Engineering & Abstraction
- **Economy of Context**: Deductive capacity is inversely proportional to irrelevant data load. Uses micro-prompts focusing on specific line ranges.
- **Sliding Window Fallacy**: Transformers lose long-term contract info (Structural Amnesia). Mitigation involves fragmentation and SRP.
- **Representação Intermediária (IR)**: Specifying intent via logic trees and state machines instead of "Syntax Dictation."
- **Reasoning Effort Management**: Forcing `reasoning_effort="none"` for bugs to avoid CoT drift and predatory token consumption (Loot Box economy).

## 5. Architectural Integrity
- **Minimalismo vs. Overengineering**: Resisting AI's tendency to suggest complex stacks (K8s, Kafka) for simple problems.
- **Monolith-First**: Favoring Rails 8 + SQLite + Kamal 2 for rapid, maintainable delivery.
- **DevCache**: Freezing state and using Rsync for real data integration instead of mocks.
