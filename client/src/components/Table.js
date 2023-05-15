const Table = () => {
    return (
        <div>
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
    );
};

export default Table;
