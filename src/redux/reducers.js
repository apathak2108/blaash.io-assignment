import {
  GET_ALL_PLAYLISTS_FAILURE,
  GET_ALL_PLAYLISTS_LOADING,
  GET_ALL_PLAYLISTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const playlistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYLISTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_PLAYLISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default playlistsReducer;
