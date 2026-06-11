# wrap-antd

`wrap-antd` is an enterprise UI wrapper based on Ant Design v5. Existing consumers can replace:

```ts
import * as antd from 'antd';
```

with:

```ts
import * as antd from 'wrap-antd';
```

Most Ant Design components are re-exported unchanged. The package adds an enterprise theme extracted from `global-spec/`, a themed `ConfigProvider`, and a place to collect business components.

## Install

```bash
pnpm add wrap-antd antd react react-dom
```

## Usage

```tsx
import { Button, ConfigProvider } from 'wrap-antd';
import 'wrap-antd/reset.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">Submit</Button>
    </ConfigProvider>
  );
}
```

## Development

```bash
pnpm install
pnpm dev
pnpm docs:dev
pnpm build
pnpm typecheck
pnpm test
pnpm check
pnpm run ci
```

## Documentation

This project uses dumi for an Ant Design-style documentation site.

- `pnpm docs:dev` starts the local documentation server.
- `pnpm docs:build` builds static documentation into `docs-dist/`.

## Design Tokens

`globalDesignTokens` exposes the extracted color, radius, shadow, space, typography, layout, and image-ratio specs:

```ts
import { globalDesignTokens } from 'wrap-antd';

globalDesignTokens.color.brand[7]; // #9B7235
```
