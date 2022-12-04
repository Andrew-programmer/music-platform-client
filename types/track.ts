import {IComment} from "./icomment";

export interface ITrack {
    _id: string;
    name: string;
    text: string;
    artist: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[];
}

export interface TrackState {
    tracks: ITrack[];
    error?: string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}

interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS,
    payload: ITrack[]
}

interface FetchTrackActionError {
    type: TrackActionTypes.FETCH_TRACKS_ERROR,
    payload: string;
}

export type TrackAction = FetchTrackAction | FetchTrackActionError;
