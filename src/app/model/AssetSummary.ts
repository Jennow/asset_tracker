import { PieChartItem } from "./charts/PieChartItem";

export interface AssetSummary {
    sum: number,
    performanceLastMonth: number,
    performanceLastYear: number,
    sumsPerUserasset: PieChartItem[]
}