import axios from "axios";
import {
  GET_ALL_PLAYLISTS_FAILURE,
  GET_ALL_PLAYLISTS_LOADING,
  GET_ALL_PLAYLISTS_SUCCESS,
} from "./actionTypes";

export const getAllPlaylists = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_PLAYLISTS_LOADING });
    try {
      const POST_URL = `${process.env.API_ENDPOINT}${getAllPlayList}`;
      const body = { Content_Type: 2 };
      const headers = {
        "X-Api-Key": process.env.X_API_KEY,
        "X-Tenant-Key": process.env.X_TENANT_KEY,
      };
      const response = await axios.post(POST_URL, body, { headers });
      dispatch({
        type: GET_ALL_PLAYLISTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PLAYLISTS_FAILURE,
        error: error.message,
      });
    }
  };
};
