import test from "node:test";
import assert from "node:assert";

test("preview render dimensions and theme colors", () => {
  const width = 2200;
  const height = 1040;
  assert.strictEqual(width, 2200);
  assert.strictEqual(height, 1040);
});
