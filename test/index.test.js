import { describe, it, expect } from "vitest";
import LoadingIndicator from "../index.js";

describe("LoadingIndicator", () => {
  it("should have correct default patterns for large size", () => {
    const loader = new LoadingIndicator({ size: "large" });
    expect(loader.patterns).toHaveLength(8);
    expect(loader.size).toBe("large");
  });

  it("should have correct default patterns for small size", () => {
    const loader = new LoadingIndicator({ size: "small" });
    expect(loader.patterns).toHaveLength(6);
    expect(loader.size).toBe("small");
  });

  it("should default to large size", () => {
    const loader = new LoadingIndicator();
    expect(loader.size).toBe("large");
  });

  it("should reverse patterns when rotation is cw", () => {
    const loaderNormal = new LoadingIndicator({
      size: "large",
      rotation: "ccw",
    });
    const loaderCw = new LoadingIndicator({ size: "large", rotation: "cw" });
    expect(loaderCw.patterns[0]).toBe(
      loaderNormal.patterns[loaderNormal.patterns.length - 1],
    );
  });

  it("should use custom format function if provided", () => {
    const format = (pattern) => `loading: ${pattern}`;
    const loader = new LoadingIndicator({ format });
    expect(loader.format("test")).toBe("loading: test");
  });

  it("should default interval to 70ms", () => {
    const loader = new LoadingIndicator();
    expect(loader.interval).toBe(70);
  });

  it("should use custom interval if provided", () => {
    const loader = new LoadingIndicator({ interval: 100 });
    expect(loader.interval).toBe(100);
  });

  it("should start without error", () => {
    const loader = new LoadingIndicator();
    expect(() => loader.start()).not.toThrow();
    loader.stop();
  });

  it("should stop without error after start", () => {
    const loader = new LoadingIndicator();
    loader.start();
    expect(() => loader.stop()).not.toThrow();
  });

  it("should allow restart after stop", () => {
    const loader = new LoadingIndicator();
    loader.start();
    loader.stop();
    expect(() => loader.start()).not.toThrow();
    loader.stop();
  });

  it("should stop multiple times without error", () => {
    const loader = new LoadingIndicator();
    loader.start();
    loader.stop();
    expect(() => loader.stop()).not.toThrow();
  });

  it("should cycle through all patterns", () => {
    const loader = new LoadingIndicator({ size: "large", interval: 10 });
    const originalFormat = loader.format;
    const seenPatterns = [];
    loader.format = (pattern, index) => {
      seenPatterns.push({ pattern, index });
      return originalFormat(pattern);
    };
    loader.start();
    // Wait long enough to see multiple cycles
    return new Promise((resolve) => {
      setTimeout(() => {
        loader.stop();
        // Should have cycled through patterns multiple times
        expect(seenPatterns.length).toBeGreaterThan(loader.patterns.length);
        resolve();
      }, 100);
    });
  });
});
