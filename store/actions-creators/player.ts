import {PlayerAction, PlayerActionTypes} from "../../types/player";

export const playTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PLAY}
}
