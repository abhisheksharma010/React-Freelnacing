import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Welcome from "./Pages/Welcome";
import DashBoard from "./Pages/DashBoard";
import Running from "./clinets/projects/Running";
import Profile from "./freelancer/Profile";
import NFT from "./freelancer/NFT";
import MarketPlace from "./clinets/pages/MarketPlace";
import NotDownload from "./Pages/NotDownload";
import Form from "./clinets/projects/Form";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const { ethereum } = window;

    if (!ethereum) {
      // Redirect to the "not-download" page if ethereum is not available
      navigate("/not-download");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/not-download" element={<NotDownload />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects/running" element={<Running />} />
      <Route path="/projects/form" element={<Form />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="/marketplace" element={<MarketPlace />} />
    </Routes>
  );
}

export default App;
