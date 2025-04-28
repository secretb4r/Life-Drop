const Sidebar = ({ role }: { role: string }) => {
    const links = {
      admin: [
        { label: "Dashboard", href: "/AdminDashboard" },
        { label: "Users", href: "/admin/users" },
        { label: "Donations", href: "/admin/donations" },
      ],
      donor: [
        { label: "Dashboard", href: "/DonorDashboard" },
        { label: "My Donations", href: "/donor/donations" },
        { label: "Appointments", href: "/donor/appointments" },
      ],
      recipient: [
        { label: "Dashboard", href: "/RecipintDashboard" },
        { label: "My Requests", href: "/recipient/requests" },
        { label: "Search Donors", href: "/recipient/search" },
      ]
    }
  
    return (
      <aside className="bg-gray-100 w-64 h-full p-6 hidden md:block">
        <nav className="space-y-3">
          {links[role as keyof typeof links].map(link => (
            <a key={link.label} href={link.href} className="block text-gray-700 hover:text-red-500">
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    )
  }
  export default Sidebar
  