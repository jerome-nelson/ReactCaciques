import { generateActionCreators, reducerFactory } from "./reducerFactory";

const UPDATE_PAGES = "UPDATE_PAGES";
const ACTIONS = ["UPDATE_PAGES"];

export const updatePages = generateActionCreators(UPDATE_PAGES, "");
export const updateState = reducerFactory(ACTIONS);
