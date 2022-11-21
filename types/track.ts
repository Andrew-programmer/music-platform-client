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
