import request from "supertest";
import express, { Express } from "express";
import cors from "cors";

// We'll create a test app for our tests
const createTestApp = (): Express => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express + TypeScript backend!" });
  });

  return app;
};

describe("API Endpoints", () => {
  let app: Express;

  beforeEach(() => {
    app = createTestApp();
  });

  describe("GET /api/hello", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/api/hello");
      expect(response.status).toBe(200);
    });

    it("should return expected message", async () => {
      const response = await request(app).get("/api/hello");
      expect(response.body).toEqual({
        message: "Hello from Express + TypeScript backend!",
      });
    });

    it("should return JSON content type", async () => {
      const response = await request(app).get("/api/hello");
      expect(response.headers["content-type"]).toContain("application/json");
    });
  });
});
