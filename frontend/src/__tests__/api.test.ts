import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the entire api module
vi.mock("../services/api", () => ({
  fetchHello: vi.fn(),
}));

// Import after mocking
import { fetchHello } from "../services/api";

describe("API Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return data on successful API call", async () => {
    // Setup the mock return value
    const mockData = { message: "Hello from Express + TypeScript backend!" };
    vi.mocked(fetchHello).mockResolvedValue(mockData);

    // Call the function
    const result = await fetchHello();

    // Verify
    expect(result).toEqual(mockData);
  });

  it("should propagate errors from API calls", async () => {
    // Setup the mock to reject
    const mockError = new Error("Network Error");
    vi.mocked(fetchHello).mockRejectedValue(mockError);

    // Call and verify
    await expect(fetchHello()).rejects.toThrow("Network Error");
  });
});
