# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenScriber is an open-source meeting transcription app for macOS 14.4+ that captures system audio and generates AI-powered meeting notes with 100% local processing.

**Key Constraint**: macOS 14.4+ only (uses native API)

## Quick Commands

```bash
# Development
pnpm install         # Install dependencies
pnpm dev            # Start with hot reload
pnpm typecheck      # Type checking
pnpm lint           # Linting
pnpm build:mac      # Build production app

# Native modules (required first time)
pnpm run setup      # Build audio capture + whisper
```

## Documentation

Comprehensive documentation is available in the `agent-docs/` folder:
- `MVP-FEATURES.md` - Feature specifications and MVP scope
- `UX-FLOW.md` - User experience and interaction design
- `TECH-STACK.md` - Technical architecture and decisions
- `POST-MVP.md` - Roadmap and go-to-market strategy
- `ARCHITECTURE-2025.md` - Advanced architecture patterns

## Current Status

- Codebase: Fresh electron-vite  monorepo template
- Main implementation file: `apps/desktop/src/main/index.ts`
- Audio capture module: Not yet implemented
- Whisper integration: Not yet implemented
- UI components: Basic template only

## Critical Implementation Notes

1. **MUST** check macOS version first (quit if <14.4)
2. Use Core Audio Process Taps API (no virtual drivers)
3. All processing stays local (no cloud APIs)
4. See documentation files for detailed implementation plans