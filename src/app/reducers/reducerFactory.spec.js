import { reducerFactory } from "./reducerFactory";

describe("reducerFactory", () => {
  it("should take a list of actions and output a reducer function", () => {
    expect(typeof reducerFactory(["fake-action"])).toBe("function");
  });
  it("should throw an exception if initialised with undefined list/empty list/list isn't an array", () => {
    expect(() => reducerFactory()).toThrowError(
      "reducerFactory requires action types to be set"
    );
    expect(() => reducerFactory([])).toThrowError(
      "reducerFactory requires action types to be set"
    );
    expect(() => reducerFactory("11")).toThrowError(
      "reducerFactory requires action types to be set"
    );
  });

  describe("when reducer is called", () => {
    // TODO: Convert into generator that iterates over same result when .next called
    it("should return empty object if action or previousState are undefined or if action.type is not set", () => {
      const reducer = reducerFactory(["fake-action"]);
      expect(reducer(undefined, { type: "fake-action", payload: {} })).toEqual(
        {}
      );
      expect(reducer({}, undefined)).toEqual({});
      expect(reducer({}, {})).toEqual({});
    });

    it("should return updated state if action requested is part of actionType list", () => {
      expect(
        reducerFactory(["fake-action", "requested-action"])(
          {},
          {
            type: "requested-action",
            payload: {
              id: "123",
              data: ["totally", 0, "data"]
            }
          }
        )
      ).toEqual({
        "123": ["totally", 0, "data"]
      });
    });

    it("should return previous state if action type not in list or payload has no id", () => {
      expect(
        reducerFactory(["fake-action", "requested-action"])(
          {
            initialState: ""
          },
          {
            type: "unknown-action",
            payload: {}
          }
        )
      ).toEqual({
        initialState: ""
      });
    });
  });
});
