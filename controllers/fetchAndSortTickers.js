const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fetchAndSortTickers = async () => {
    const tickers = await fetch("https://api.wazirx.com/api/v2/tickers");
};
module.exports = fetchAndSortTickers;
