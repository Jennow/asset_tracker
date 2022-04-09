import { Asset } from "./Asset";

export interface Transaction {
    id?: number,
    asset: Asset,
    createdate: string,
    value: number,
    status: number,
    ago?: string
}