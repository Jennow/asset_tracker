import { AssetType } from "../enums/AssetType";
import { Currency } from "./Currency";

interface AssetHistory {
    date: string,
    amount: number,
}
export interface Asset {
    id?: number,
    identifier: string
    name: string,
    type: AssetType,
    icon?: string,
    subtype?: string,
    currency: Currency,
    platform: string,
    highlighted?: boolean,
    sum: number,
    amount: number,
    performance: number,
    history: Array<AssetHistory>
}