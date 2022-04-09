import { Currency } from "./Currency"

export interface User {
    id?: number,
    login: string,
    password: string,
    currency: Currency,
}