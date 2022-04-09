export interface Chart {
    id?: number,
    title: string,
    icon: string,
    sum?: number,
    type: string,
    data: Array<any>, 
    labels?: Array<any>, 
}

