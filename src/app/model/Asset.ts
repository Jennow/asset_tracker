import { AssetType } from "../enums/AssetType";
import { AssetHistoryItem } from "./AssetHistoryItem";
import { Currency } from "./Currency";

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
    history: Array<AssetHistoryItem>
}