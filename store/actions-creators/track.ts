import {TrackAction, TrackActionTypes} from "../../types/track";
import {Dispatch} from "react";
import axios from "axios";
import {API, TRACK} from "../../serverInfo";

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(API + TRACK);
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Load tracks error. Try to reload the page or mail us, if it\'s necessary'});
        }
    }
}
