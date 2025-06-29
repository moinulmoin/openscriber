# OpenScriber

Open source granola.ai alternative for taking actionable notes from meetings for macOS without meeting bots.

## Features

- **No Meeting Bots** - No need to join meetings to take notes
- **Privacy-First** - Your audio never leaves your machine
- **Streamlined** - Get actionable notes from your meetings
- **Open Source** - Full transparency and control over your data

## Tech Stack

- **Language**: TypeScript
- **Framework**: Next.js, Electron
- **UI**: shadcn/ui, Tailwind CSS
- **Monorepo**: Turborepo, pnpm

## Project Structure

```
openscriber/
├── apps/
│   ├── desktop/    # Electron app
│   └── web/        # Web app
├── packages/
│   ├── ui/         # Shared UI components
│   ├── eslint-config/ # Shared ESLint config
│   └── typescript-config/ # Shared TypeScript config
```

## Commands

```bash
# Development
pnpm dev              # Run all apps
pnpm dev:desktop      # Run desktop app only

# Building
pnpm build            # Build all apps
pnpm build:mac        # Build macOS app

# Code Quality
pnpm lint             # Lint all packages
pnpm typecheck        # Type check
pnpm format           # Format code
```


## License

GPL-3.0 License - see [LICENSE](LICENSE) file for details.