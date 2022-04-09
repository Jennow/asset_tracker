interface Since {
  readonly property: number;
  readonly end: string;
}

export class TimeformatService {
  constructor() { }

  /**
   * Returns a string formatted like "x minutes/ hours/ days ago"
   * @param timeStr 
   */
  static ago(date: string) {
    const since = this.timeSince(date)
    return`${since.property} ${since.end}${since.property > 1 ? "s" : ""} ago`;
  }

  static timeSince(dateStr: string): Since {
    const date:Date = new Date(Date.parse(dateStr));
    const now:Date  = new Date(Date.now());
    const difftime  = now.getTime() - date.getTime();
    //  TODO: Why 5.5 ???
    const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
    const [sec, min, hr, day, month] = [
      diffDate.getSeconds(),
      diffDate.getMinutes(),
      diffDate.getHours(),
      diffDate.getDate() - 1,
      diffDate.getMonth(),
    ];

    return month >= 1 ? {"property" : month, "end": "month"}
    : day        >= 1 ? {"property" : day,   "end": "day"}
    : hr         >= 1 ? {"property" : hr,    "end": "hr"}
    : min        >= 1 ? {"property" : min,   "end": "min"}
    : day        >= 1 ? {"property" : sec,   "end": "sec"}
    : {"property" : 0 , "end": "unknown"};
  }
}
