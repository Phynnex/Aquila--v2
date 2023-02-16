import React from "react";
import { Routes, Route } from "react-router-dom";
import Monitor from "./Monitor";
import Protect from "./Protect";
import Scan from "./Scan";
import ScanResults from "./ScanResults";

import Settings from './Settings';
import HomePage from './HomePage';
import IOSReport from './ScanReports/IOSReport';
import APKReport from './ScanReports/APKReport';

const NavPage = () => {
  return (
    
      <section>
        <Routes>
        <Route path="/scan-results" element={<ScanResults />} />
      
        <Route path="/scan" element={<Scan />} />
        <Route path="/protect" element={<Protect />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/report-ios" element={<IOSReport />} />
        <Route path="/report-apk" element={<APKReport />} />
        </Routes>
      </section>
    
  );
};

export default NavPage;