// Test the health endpoint

const request = require("supertest");
const app = require("../src/app");
test("GET /api/health return ok", async () => {
  const res = await request(app).get("/api/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});

// Test the api/reading/process endpoint

test("POST /api/reading/process return processed reading", async () => {
  const reading = {
    id: "60f7e9b3d6f9b5d1e8e7a1f9",
    temperature: 25,
    timestamp: "2021-07-21T12:00:00Z",
  };

  const res = await request(app).post("/api/readings/process").send(reading);

  expect(res.statusCode).toBe(200);
  expect(res.body.success).toBe(true);
  expect(res.body.reading.id).toBe(reading.id);
  expect(res.body.reading.status).toBe("NORMAL");
  expect(res.body.reading.processedAt).toBeDefined();
});
