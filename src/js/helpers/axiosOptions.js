export const optionsGetCoins = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        timePeriod: '24h',
        limit: '99',
        offset: '0'
    },
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
    }
};

export const optionsNewsSearch = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
        q: 'Cryptocurrencies',
        safeSearch: 'Moderate',
        textFormat: 'Raw',
        freshness: 'Week',
        mkt: 'en-US',
        count: '33'
    },
    headers: {
        'accept-language': 'en',
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
    }
};

