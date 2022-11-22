import {ITrack} from "./track";

export interface PlayerState {
    active: null | ITrack;
    duration: number;
    volume: number;
    currentTime: number;
    pause: boolean;
}

export enum PlayerActionTypes {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_DURATION = "SET_DURATION",
    SET_VOLUME = "SET_VOLUME"
}

interface PlayAction {
    type: PlayerActionTypes.PLAY;
}

interface PauseAction {
    type: PlayerActionTypes.PAUSE;
}

interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE;
    payload: ITrack;
}

interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME;
    payload: number;
}

interface SetDurationAction {
    type: PlayerActionTypes.SET_DURATION;
    payload: number;
}

interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME;
    payload: number;
}

export type PlayerAction =
    PlayAction
    | PauseAction
    | SetActiveAction
    | SetCurrentTimeAction
    | SetDurationAction
    | SetVolumeAction;
