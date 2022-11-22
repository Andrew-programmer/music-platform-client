import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {rootReducer, RootState} from "./reducers";
import {createStore} from "redux";

const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
