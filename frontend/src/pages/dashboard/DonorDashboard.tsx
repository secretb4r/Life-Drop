import Navbar from "../../components/layout/Navbar"
import Sidebar from "../../components/layout/sidebar"
import DashboardCard from "../../components/ui/dashboardCard"

export default function DonorDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar role="donor" />
      <main className="flex-1 p-6">
        <Navbar />
        <h2 className="text-2xl font-bold my-6">Welcome, Donor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="My Donations" value="8" />
          <DashboardCard title="Next Eligible Date" value="2025-06-12" color="bg-green-500" />
          <DashboardCard title="Appointments" value="1" color="bg-yellow-500" />
        </div>
      </main>
    </div>
  )
}
