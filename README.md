# README #

Svelte Component Library

## Install Dependencies
```shell
pnpm install
```

## Add Dependencies
```shell
pnpm install <pkg> -w
```

## Add Dependencies for scoped packages
```shell
pnpm install <pkg> -r --filter <pkg_selector>
```

## Publish
```shell
lerna publish
```

## Usage

### Launch playground
```shell
npm run pg
```

### Launch component website
```shell
npm run dev
```

### build components
```shell
cmex build
cmex build --scope <component>
cmex build -s <component>
```

### run unit test
```shell
cmex test
cmex test --scope <component>
cmex test -s <component>
```
