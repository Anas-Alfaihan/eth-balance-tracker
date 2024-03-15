import { getLastBlockNumber } from "../src";

jest.setTimeout(10000);
describe("should return number", () => {
  it("should return a number", async () => {
    const result = await getLastBlockNumber({
      INFURA_PROJECT_ID: "bd4eb180b1cc4aea9c9eaa5e13c700f4",
    });
    expect(typeof result).toBe("bigint");
  });
});
