const filterdata=[
    // {
    //     category_name:'Nationality',
    //     category_filters:[

    //     ]
    // },
    {
        category_name:'Age',
        category_filters:["11-20 age","21-30 age","31-40 age","41-50 age"],
    },
    {
        category_name:'BattingAverage',
        category_filters:["0-10 batting avg.","10-20 batting avg.","20-30 batting avg.","30-40 batting avg.","40-50 batting avg.",">50 batting avg."]
    },
    {
        category_name:'Runs',
        category_filters:["0-1000 runs","1001-2000 runs","2001-3000 runs","3001-4000 runs",">4000 runs"]
    },
    {
        category_name:'Wickets',
        category_filters:["0-50 wickets","51-100 wickets","101-150 wickets",">150 wickets"]
    },
    {
        category_name:'Matches',
        category_filters:["1-50 matches", "51-100 matches", "101-150 matches", ">150 matches"]
    }
]

export default filterdata;