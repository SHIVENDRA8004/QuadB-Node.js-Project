const Table = () => {
    return (
        <div>
            <table class="table text-light">
                <thead className="text-secondary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Last Traded Price</th>
                        <th scope="col">Buy / Sell Price</th>
                        <th scope="col">Difference</th>
                        <th scope="col">Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
