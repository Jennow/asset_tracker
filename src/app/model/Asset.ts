export interface Asset {
    id?: number,
    name: string,
    type: string,
    icon?: string,
    subtype?: string,
    currency: string,
    platform: string,
    highlighted?: boolean,
    sum: number,
    performance: number,
}