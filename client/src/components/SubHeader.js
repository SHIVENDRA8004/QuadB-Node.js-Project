const SubHeader = () => {
    return (
        <div classname="container-fluid">
            <div className="mt-4">
                <div className="fs-2 d-flex justify-content-center text-secondary ">Best Price to Trade</div>
            </div>
            <div className="d-flex align-items-center mt-1">
                <div className="col-2 text-center p-0">
                    <div className="fs-sm-1 text-sky">0.86 %</div>
                    <div className="text-secondary fw-sm-bold">5 Mins</div>
                </div>
                <div className="col-2 text-center p-0">
                    <div className="fs-sm-1  text-sky">1.66 %</div>
                    <div className="text-secondary fw-sm-bold">1 Hour</div>
                </div>
                <div className="col-4 text-center p-0">
                    <div className="fs-sm-2 fs-2">₹ 25,22,580</div>
                    <div className="text-secondary fw-sm-bold">Average BTC/INR net price including commission</div>
                </div>
                <div className="col-2 text-center p-0">
                    <div className="fs-sm-1 text-sky">10.95 %</div>
                    <div className="text-secondary fw-sm-bold">1 Day</div>
                </div>
                <div className="col-2 text-center p-0">
                    <div className="fs-sm-1 text-sky">14.68 %</div>
                    <div className="text-secondary fw-sm-bold">7 Day</div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
