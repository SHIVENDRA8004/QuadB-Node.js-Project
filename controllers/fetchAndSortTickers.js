const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fetchAndSortTickers = async () => {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const tickers = await response.json();
    const data = Object.entries(tickers).map(([_, ticker]) => ({
        storeName: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        baseUnit: ticker.base_unit,
    }));
    console.log(data);
};
module.exports = fetchAndSortTickers;
