# @plurnk/plurnk-mimetypes-grammar-dart

Pre-built `tree-sitter-dart` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-dart
```

## what's in here

- **`dart.wasm`** — pre-built from the pinned upstream [tree-sitter-dart](https://github.com/UserNobody14/tree-sitter-dart) commit (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `dart.wasm` is built from the upstream tree-sitter-dart grammar; see the pinned commit for that project's attribution.
