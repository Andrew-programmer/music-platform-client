import {playerReducer} from "./playerReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    player: playerReducer
})

export type RootState = ReturnType<typeof rootReducer>;
