import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import * as apiService from "../services/api";

// Mock the API service
vi.mock("../services/api", () => ({
  fetchHello: vi.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should show loading state initially", () => {
    // Mock API call that never resolves
    vi.spyOn(apiService, "fetchHello").mockImplementation(
      () => new Promise(() => {}),
    );

    render(<App />);

    expect(
      screen.getByText(/loading message from backend/i),
    ).toBeInTheDocument();
  });

  it("should display message from backend when loaded", async () => {
    // Mock successful API response
    vi.spyOn(apiService, "fetchHello").mockResolvedValue({
      message: "Hello from Express + TypeScript backend!",
    });

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Hello from Express + TypeScript backend!"),
      ).toBeInTheDocument();
    });
  });

  it("should display error message when API fails", async () => {
    // Mock API failure
    vi.spyOn(apiService, "fetchHello").mockRejectedValue(
      new Error("API Error"),
    );

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Error connecting to backend"),
      ).toBeInTheDocument();
    });
  });
});
