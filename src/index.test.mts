import { describe, expect, test } from "bun:test";
import { fn } from "./index.mts";

describe("describe", () => {
  test("test", () => {
    expect(fn()).toBe(1);
  });
});
