// import { Routes, Route } from "react-router-dom";

// // Public Pages
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// // Dashboard Layout
// import DashboardLayout from "../Layout/DashboardLayout";

// // Dashboard Pages
// import Dashboard from "../pages/Dashboard";
// import Transfer from "../pages/Transfer";
// import Wallet from "../pages/Wallet";
// import Cards from "../pages/Cards";
// import Analytics from "../pages/Analytics";

// // Auth Protection
// import ProtectedRoute from "./ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>

//       {/* ===== PUBLIC ROUTES ===== */}
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* ===== PROTECTED DASHBOARD ===== */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/transfer" element={<Transfer />} />
//         <Route path="/wallet" element={<Wallet />} />
//         <Route path="/cards" element={<Cards />} />
//         <Route path="/analytics" element={<Analytics />} />
//       </Route>

//     </Routes>
//   );
// };

// export default AppRoutes;
