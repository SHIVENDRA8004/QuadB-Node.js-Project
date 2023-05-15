import { useState } from "react";
import axios from "axios";
const Table = () => {
    // const [tickers, setTickers] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get();
    //         setTickers(response.data);
    //         console.log(tickers);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // fetchData();
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
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
