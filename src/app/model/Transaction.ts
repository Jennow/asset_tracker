import { Asset } from "./Asset";

export interface Transaction {
    id?: number,
    asset: Asset,
    createdate: string,
    amount: number,
    status: number,
    ago?: string
}