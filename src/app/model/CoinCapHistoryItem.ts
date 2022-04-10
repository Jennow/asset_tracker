interface CoinCapDataSet {
  data: Array<CoinCapHistoryItem>,
  timestamp: number
}

export interface CoinCapHistoryItem {
    date: string,
    time: number,
    priceUsd: number
}