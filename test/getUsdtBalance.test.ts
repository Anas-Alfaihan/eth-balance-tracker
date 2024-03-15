import { getUsdtBalance } from "../src";
jest.setTimeout(10000);

describe("getUsdtBalance", () => {
  test("should return the balance of the given address in wei", async () => {
    const balance = await getUsdtBalance({
      INFURA_PROJECT_ID: "bd4eb180b1cc4aea9c9eaa5e13c700f4",
      Address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    });

    expect(balance).toBeDefined();
    expect(typeof balance).toBe("bigint"); // Adjust the type if the return type is different
  });
});
