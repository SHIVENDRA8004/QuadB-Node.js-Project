import Footer from "./components/Footer";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Table from "./components/Table";

function App() {
    return (
        <div className="App">
            <div className="components">
                <Header />
                <SubHeader />
                <Table />
            </div>
            <Footer />
        </div>
    );
}

export default App;
