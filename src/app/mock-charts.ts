import { Chart } from './model/Chart';

export const CHARTS: Chart[] = [
    {
        "id":1,
        "title": "Example card title",
        "icon": "fa-shopping-cart",
        "type": "area",
        "data": [
            1,2,3,8,5,2,81,
        ],
        "sum": 2000,
    },
    {
        "id":2,
        "title": "new orders",
        "icon": "fa-store",
        "type": "area",
        "data": [
            99,82,24,13,129,
        ],
        "sum": 3000,
    },
    {
        "id":3,
        "title": "assets",
        "icon": "fa-store",
        "type": "pie",
        "data": [
            10,20,30,5,35,
        ],
        "labels": ["Real estate", "Stocks", "Etfs", "Crypto", "Precious Metal"],
        "sum": 300,
    },
]