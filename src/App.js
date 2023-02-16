import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./web/pages/ContactUs";
import HowItWorks from "./web/pages/HowItWorks";
import Pricing from "./web/pages/Pricing";
import Login from "./web/Auth/Login";
import DashboardPage from "./dashboard/components/DashboardPage";
import Scan from "./dashboard/Pages/Scan";
import Protect from "./dashboard/Pages/Protect";
import Monitor from "./dashboard/Pages/Monitor";
import Settings from "./dashboard/Pages/Settings";
import Hompage from "dashboard/Pages/HomePage";
import Projects from "./dashboard/Pages/Projects";
// import NewProjectModal from "./dashboard/components/Modals/NewProjectModal";
import Register from "./web/Auth/Register";
import Activate from "./web/Auth/Activate";
import ForgetPassword from "web/Auth/ForgetPassword";
import PasswordReset from "web/Auth/PasswordReset";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UploadScan from "dashboard/Pages/UploadScan";
import IOSReport from "dashboard/Pages/ScanReports/IOSReport";
import APKReport from "dashboard/Pages/ScanReports/APKReport";


function App() {
  // const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       refetchOnmount: true,
  //       refetchOnReconnect: true,
  //       retry: false,
  //       staleTime: twentyFourHoursInMs,
  //     },
  //   },
  // });
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/upload-scan" element={<UploadScan />} />
            {/* <Route path="/new-modal" element={<NewProjectModal />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Activate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/password-reset" element={<PasswordReset />} />


            <Route path="/dashboard" element={<DashboardPage />}>
              <Route path="/dashboard/scan" element={<Scan />} />
              <Route path="/dashboard/protect" element={<Protect />} />
              <Route path="/dashboard/monitor" element={<Monitor />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/home" element={<Hompage />} />
              <Route path="/dashboard/report-ios" element={<IOSReport />} />
              <Route path="/dashboard/report-apk" element={<APKReport />} />
            </Route>
          </Routes>
        </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
