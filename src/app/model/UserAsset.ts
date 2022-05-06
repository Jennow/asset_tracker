import { AssetType } from "../enums/AssetType";
import { AssetHistoryItem } from "./AssetHistoryItem";
import { Currency } from "./Currency";

export interface UserAsset {
    id?: number,
    identifier: string
    name: string,
    type: AssetType,
    performance?: number,
    icon?: string,
    subtype?: string,
    currency: Currency,
    plattform?: string,
    highlighted?: boolean,
    sum: number,
    amount: number,
    history?: Array<AssetHistoryItem>
}