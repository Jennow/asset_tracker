import { Currency } from "./Currency"

export interface User {
    id?: number,
    username: string,
    password: string,
    currency: Currency,
}