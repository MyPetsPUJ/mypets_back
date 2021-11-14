import app from "../src/app";
import request from "supertest";


describe("GET /ping", () => {
  test("should respond with a 200 status code", async () => {
    const response =  await request(app).get("/api/ping").send();

    expect( response.statusCode).toBe(200);
  });
});
