import { reducerFactory } from "./reducerFactory";

const ACTIONS = ["REQUEST_MADE", "REQUEST_FAILED", "REQUEST_SUCCESS"];
export const updateState = reducerFactory(ACTIONS);
