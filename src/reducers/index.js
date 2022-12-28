import { combineReducers } from "redux";
import PosrtReducers from "./postsReducer";
import UsersRedusers from "./usersRedusers";
export default combineReducers({
  posts: PosrtReducers,
  users: UsersRedusers,
});
