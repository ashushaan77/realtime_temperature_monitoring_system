let socket;

const io = require("socket.io-client");

beforeAll(() => {
  socket = io("http://localhost:5000");
});

test("socket.io connection", (done) => {
  socket.on("connect", () => {
    expect(socket.connected).toBe(true);
    done();
  });
});

test("Receiving reading on temperature_reading event", (done) => {
  socket.on("temperature_reading", (data) => {
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("temperature");
    expect(data).toHaveProperty("timestamp");
    done();
  });
});


test("Receiving processed reading on processed_reading event", (done) => {
  socket.on("processed_reading", (data) => {
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("temperature");
    expect(data).toHaveProperty("timestamp");
    expect(data).toHaveProperty("status");
    expect(data).toHaveProperty("processedAt");
    done();
  });
});

afterAll(() => {
  socket.close();
});
