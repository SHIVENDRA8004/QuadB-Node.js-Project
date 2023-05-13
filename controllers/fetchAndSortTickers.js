const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fetchAndSortTickers = async () => {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();
    const tickers = Object.entries(data).map(([_, ticker]) => ({
        storeName: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        baseUnit: ticker.base_unit,
    }));
    sortedTickers = tickers.sort((tickerA, tickerB) => tickerB.volume - tickerA.volume);
    topTenTickers = sortedTickers.slice(0, 10);
    return topTenTickers;
};
module.exports = fetchAndSortTickers;
