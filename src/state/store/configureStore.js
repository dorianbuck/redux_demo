import { createStore } from "redux";
import rootReducer from "../redusers/rootReduser";
import initialState from '../store/initialState'

const configureStore = () => {
  return createStore(rootReducer, initialState);
};
export default configureStore;
