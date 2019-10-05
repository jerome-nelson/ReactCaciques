import { generateActionCreators, reducerFactory } from "./reducerFactory";

const SET_MENU_ITEMS = "SET_MENU_ITEMS";
const ACTIONS = [SET_MENU_ITEMS];

// primary, footer etc...
export const setMenu = generateActionCreators(SET_MENU_ITEMS, "");
export const updateState = reducerFactory(ACTIONS);
