import {IComment} from "./icomment";

export interface ITrack {
    _id: number;
    name: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[];
}
