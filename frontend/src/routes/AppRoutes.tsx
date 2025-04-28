// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"
// import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AdminDashboard from "../pages/dashboard/AdminDashboard"
import DonorDashboard from "../pages/dashboard/DonorDashboard"
import RecipientDashboard from "../pages/dashboard/RecipientDashboard"
import { Home } from "@/pages/Home"

const AppRoutes = () => (
  <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/donor" element={<DonorDashboard />} />
    <Route path="/recipient" element={<RecipientDashboard />} />
  </Routes>
)

export default AppRoutes
