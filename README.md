# QuietStrength AI Coaching System

A production-ready mental health coaching platform with AI-powered assessments, secure chat, and coach review workflows.

## Architecture

- **Monorepo**: pnpm workspaces
- **API**: Express.js with TypeScript
- **Worker**: BullMQ job queue for async processing
- **Shared**: Reusable types and utilities
- **AI Core**: Framework runners and safety detection

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm
- PostgreSQL 14+
- Redis (for job queue)

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/quietstrength-ai.git
cd quietstrength-ai
pnpm install
