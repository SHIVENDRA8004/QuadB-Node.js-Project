const logo = "	https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png";
const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center pt-4 ">
                <div className="col-12 col-sm-4 text-center text-sm-start ps-sm-5">
                    <img height="48" width="280" src={logo} alt="Logo" />
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center h-50">
                    <div className="dropdown">
                        <button className="dropdown-toggle select-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            INR
                        </button>
                        <ul className="dropdown-menu">
                            <li className="ps-3 dropdown-item">INR</li>
                        </ul>
                    </div>
                    <div className="dropdown ms-3">
                        <button className="dropdown-toggle select-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BTC
                        </button>
                        <ul className="dropdown-menu">
                            <li className="ps-3 dropdown-item">BTC</li>
                            <li className="ps-3 dropdown-item">INR</li>
                            <li className="ps-3 dropdown-item">ETH</li>
                            <li className="ps-3 dropdown-item">USDT</li>
                            <li className="ps-3 dropdown-item">XRP</li>
                            <li className="ps-3 dropdown-item">TRX</li>
                            <li className="ps-3 dropdown-item">DASH</li>
                            <li className="ps-3 dropdown-item">ZEC</li>
                            <li className="ps-3 dropdown-item">XEM</li>
                            <li className="ps-3 dropdown-item">IOST</li>
                            <li className="ps-3 dropdown-item">WIN</li>
                            <li className="ps-3 dropdown-item">BTT</li>
                            <li className="ps-3 dropdown-item">WRX</li>
                        </ul>
                    </div>
                    <div className="ms-3">
                        <button className=" select-btn">BUY BTC</button>
                    </div>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center h-50">
                    <div>
                        <div className="hours-container">
                            <div className="hours" />
                            <div className="hours-label">60</div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="d-flex align-items-center ps-3 pe-3 border-0"
                            style={{ borderRadius: "12px", backgroundColor: "#6ccacb", color: "#fff" }}
                        >
                            <i className="bi bi-telegram pe-2 fs-4"></i>Connect Telegram
                        </button>
                    </div>
                    <div>
                        <div className="form-check form-switch">
                            <input className="form-check-input bg-transparent" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
