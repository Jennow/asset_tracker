import { Asset } from "./Asset";
import { CoinCapHistoryItem } from "./CoinCapHistoryItem";
import { HistoryItem } from "./HistoryItem";
import { Transaction } from "./Transaction";

interface History {
    type: string,
    data: CoinCapHistoryItem[] | any[];// TODO: Stock API History
}

export interface Dashboard {
    userAssets: Asset[],
    personalizedHistories: History[],
    overview: any,
    transactions: Transaction[],
    notifications: Notification[],
}