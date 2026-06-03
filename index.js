// Pre-built tree-sitter-dart WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: dart.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-dart/dart.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled dart.wasm. */
export const wasmPath = path.join(here, "dart.wasm");
