# aragon-client-setup

A minimal setup for working with the [Aragon SDK client](https://github.com/aragon/sdk).

## Setup

```bash
npm run setup
```

## Dependencies

- [`@aragon/sdk-client`](https://www.npmjs.com/package/@aragon/sdk-client)

## Notes

- Some vulnerabilities exist in transitive dependencies (`elliptic` via `ethers`) with no upstream fix currently available.
- Aragon's default subgraph endpoint (`satsuma-prod.com`) appears to be unavailable or deprecated. Queries to the GraphQL API (e.g. `getDaos`) will fail with `NoNodesAvailableError` until an alternative endpoint is available.

## License

[MIT](./LICENSE)
