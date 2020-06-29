import { User, performPurchase } from "../src/exercicio1";

describe("Testing", () => {
  test("Balance greater than value", () => {
    const user: User = {
      name: "Kiko",
      balance: 300,
    };

    const result = performPurchase(user, 100);

    expect(result).toEqual({
      ...user,
      balance: 200,
    });
  });

  test("Balance equal than value", () => {
    const user: User = {
      name: "Kiko",
      balance: 200,
    };

    const result = performPurchase(user, 200);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Testing balance less than value", () => {
    const user: User = {
      name: "Kiko",
      balance: 200,
    };

    const result = performPurchase(user, 300);

    expect(result).toEqual(undefined);
  });
});
