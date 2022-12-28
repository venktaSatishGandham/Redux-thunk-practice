import jsonPlaceholder from "../apis/jsonPlaceholder";
// once  your action creator gets invoked redux-thunk will realize that is a function and will invoke the inner function passing dispatch

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
    // manual call of dispatch sending an Action Object.
  };
};

export const fetchUser = (id) => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

/* Memomization
import _ from "lodash";
 
export const fetchUser = id => {
    return dispatch => {
        _fetchUser(id, dispatch);
    };
};
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
});

*/
