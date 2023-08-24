import {
    DbEventData,
    DbUserData,
    EventLocation,
    EventDate,
    EventMonth,
    EventTime,
    EventYear,
    EventDay,
} from "../../get-it-together-server/src/types";

// interface ActionPayload extends ActionObject {
//     value:
// }
// interface ActionError extends ActionObject {
//     error: Error
// }
// interface ActionMeta extends ActionObject {

// }

type ActionObject<T> = { [key: string]: T };
export type ActionPayload = ActionObject;
export type ActionMeta = ActionObject;

export interface Action {
    type: string;
    payload?: ActionPayload | ActionError;
    error?: boolean;
    meta: ActionMeta;
}
