import {
  NACIONALITY,
  User,
  LOCATION,
  Casino,
  verifyAge,
} from "../src/exercicio3";

describe("Testing2", () => {
  test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Kiko",
      age: 21,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Jokenpo",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    console.log(result);
    expect(result.brazilians.allowed).toEqual(["Kiko"]);
  });

  test("1 american allowed", () => {
    const american: User = {
      name: "John Travolta",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Come and lose your money",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    console.log(result);
    expect(result.americans.allowed).toEqual(["John Travolta"]);
  });

  test("2 american and 2 brazilians unallowed", () => {
    const american: User = {
      name: "John Travolta",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const brazilian: User = {
      name: "Kiko",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "We like your money",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      american,
      american,
      brazilian,
      brazilian,
    ]);
    console.log(result);
    expect(result.brazilians.unallowed).toEqual(["Kiko", "Kiko"]);
    expect(result.americans.unallowed).toEqual([
      "John Travolta",
      "John Travolta",
    ]);
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const american: User = {
      name: "John Travolta",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const brazilian: User = {
      name: "Kiko",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "We like your money",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      american,
      american,
      brazilian,
      brazilian,
    ]);
    console.log(result);
    expect(result.brazilians.unallowed).toEqual(["Kiko", "Kiko"]);
    expect(result.americans.allowed).toEqual([
      "John Travolta",
      "John Travolta",
    ]);
  });
});
