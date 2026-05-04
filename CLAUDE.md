# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run setup   # Install dependencies
npm run dev     # Run index.js with Node.js
```

## Architecture

This is an ES module project (`"type": "module"`) with a single entry point `index.js` that demonstrates basic usage of the `@aragon/sdk-client` package — initializing a `Context` and `Client`, then querying Aragon DAOs via `client.methods.getDaos()`.

## Known Issues

- Aragon's default subgraph endpoint (`satsuma-prod.com`) is currently unreachable, causing `NoNodesAvailableError` on any GraphQL query. Error handling is in place in `index.js`.
- Several transitive dependencies (`elliptic` via `ethers`) have unresolved vulnerabilities with no upstream fix available.
