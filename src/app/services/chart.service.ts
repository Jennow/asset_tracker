import { Injectable } from '@angular/core';
import { ChartType } from '../enums/ChartType';
import { Chart } from '../model/Chart';
import { PieChartItem } from '../model/charts/PieChartItem';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  /**
   * Generate piehart data of array. Used in overview component
   * @param items 
   * @returns Chart
   */
     getPiechart(items: any[]): Chart {
      let total = 0;
      let chartData:Array<number> = [];
      let labels:Array<string> = [];
  
      items.forEach((item: PieChartItem) =>  {
          total += item.sum
          chartData.push(item.sum)
          labels.push(item.name)
      });
      return {
          "title": "assets",
          "icon": "fa-store",
          "type": "pie",
          "data": chartData,
          "labels": labels,
          "sum": 300,
      } as Chart;   
    }

    /**
   * Generate linear data of array. Used in assetsummaries component
   * @param chartData 
   * @returns Chart
   */
       getLinearChart(chartData: any[]): Chart {
        let now = new Date();
        let lastMonth = new Date();
        lastMonth.setMonth(now.getMonth() - 1);
  
        return {
          title: 'Your crypto assets',
          sum: Math.round(chartData[chartData.length - 1][1] * 100) / 100,
          type: ChartType.area,
          data: chartData,
          xaxis: {
            type: 'datetime',
            min: lastMonth.getTime(),
            tickAmount: chartData.length,
          },
        } as Chart;
      }
}
