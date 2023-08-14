# Development

## Setup

```shell
pnpm i
gh auth refresh --scopes read:user
```

## Running Builds

```shell
GH_TOKEN=$(gh auth token) pnpm run build
```

### Adding New Projects

```shell
GH_TOKEN=$(gh auth token) pnpm run add any-number of-repository-names
```
