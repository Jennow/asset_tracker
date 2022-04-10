import { Chart } from "./Chart";

export interface AssetSummary {
    sum: number,
    comparisonLastMonth: number,
    comparisonLastYear: number,
    piechart: Chart
}