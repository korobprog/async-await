import GameSavingLoader from "../GameSavingLoader";

describe("GameSavingLoader class", () => {
  test("should return a valid GameSaving object", async () => {
    const expectedSaving = {
      id: 9,
      created: new Date(1546300800),
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    };

    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(expectedSaving);
  });

  test("should throw an error when encountering an invalid file", async () => {
    const expectedError = new Error("Error while parsing the GameSaving file");

    const mockRead = jest.fn(() => Promise.reject());
    const mockJson = jest.fn(() => Promise.reject());

    jest.mock("../reader", () => ({ default: mockRead }));
    jest.mock("../parser", () => ({ default: mockJson }));

    try {
      await GameSavingLoader.load();
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });
});
