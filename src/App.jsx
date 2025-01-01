import { Route, Routes } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-35 min-h-screen bg-gradient-to-b from-teal-100 to-orange-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
