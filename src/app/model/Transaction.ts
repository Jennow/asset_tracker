import { UserAsset } from "./UserAsset";

export interface Transaction {
    id?: number,
    userasset: UserAsset,
    createdate: string,
    amount: number,
    status: number,
    ago?: string
}