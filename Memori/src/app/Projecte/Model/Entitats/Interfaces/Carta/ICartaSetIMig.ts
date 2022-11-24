import {ICarta} from "./ICarta";

export interface ICartaSetIMig extends ICarta{
    value: number;
    status: boolean;
    setValue(num: number): void;
    girar(): void;
}
