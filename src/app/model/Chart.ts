import { ChartType } from "ng-apexcharts";

export interface Chart {
    id?: number,
    title?: string,
    icon?: string,
    sum?: number,
    type: ChartType,
    data: Array<any>, 
    labels?: Array<any>,
    xaxis?: object,
}

