import { Asset } from "./Asset";

export interface AssetHistory {
    id?: number,
    month: string,
    year: string,
    asset: Asset,
    sum: number,
}