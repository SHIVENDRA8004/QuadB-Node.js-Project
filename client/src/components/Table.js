import { useState, useEffect } from "react";
import axios from "axios";
const Table = () => {
    const [tickers, setTickers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/v1/tickers/getAllTicker");
            await setTickers(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <table className="table text-light text-center mt-4">
                    <thead className="text-secondary">
                        <tr>
                            <th>#</th>
                            <th>Platform</th>
                            <th>Last Traded Price</th>
                            <th>Buy / Sell Price</th>
                            <th>Difference</th>
                            <th>Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickers?.map((ticker, i) => (
                            <tr>
                                <th>{i + 1}</th>
                                <td>{ticker.storeName}</td>
                                <td>&#8377; {Math.ceil(ticker.last * ticker.volume)}</td>
                                <td>
                                    &#8377; {Math.ceil(ticker.buy * ticker.volume)} / &#8377;{Math.ceil(ticker.sell * ticker.volume)}
                                </td>
                                <td>&#8377; {Math.ceil(ticker.buy * ticker.last * ticker.volume)}</td>
                                <td>&#8377; {Math.ceil(ticker.buy * ticker.last * ticker.volume)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="row">
                <div className="col-8 col-sm-6">Copyright &copy; 2019 &nbsp; HoldInfo.com </div>
                <div className="col-4 col-sm-6 text-end ">Support</div>
            </div>
        </div>
    );
};

export default Table;
