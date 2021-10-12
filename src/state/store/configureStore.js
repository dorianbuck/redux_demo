import { createStore } from "redux";
import rootReducer from "../redusers/rootReduser";

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
