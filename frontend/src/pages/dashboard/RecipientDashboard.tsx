import Navbar from "../../components/layout/Navbar"
import Sidebar from "../../components/layout/sidebar"
import DashboardCard from "../../components/ui/dashboardCard"

export default function RecipientDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar role="recipient" />
      <main className="flex-1 p-6">
        <Navbar />
        <h2 className="text-2xl font-bold my-6">Welcome, Recipient</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="My Requests" value="5" />
          <DashboardCard title="Matched Donors" value="3" color="bg-blue-500" />
          <DashboardCard title="Blood Received" value="2 Units" color="bg-green-500" />
        </div>
      </main>
    </div>
  )
}
