"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/layout/Navbar"
import Sidebar from "../../components/layout/sidebar"
import { toast } from "sonner"
import API from "@/lib/api"

type User = {
  _id: string
  name: string
  email: string
  role: string
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState("")

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users")
      setUsers(res.data)
    } catch (error) {
      toast.error("Failed to load users")
    }
  }

  const deleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return
    try {
      await API.delete(`/admin/users/${id}`)
      toast.success("User deleted successfully")
      fetchUsers()
    } catch (error) {
      toast.error("Failed to delete user")
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex h-screen">
      <Sidebar role="admin" />
      <main className="flex-1 p-6">
        <Navbar />
        <h2 className="text-2xl font-bold mb-6 mt-4">Admin </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-2 rounded mb-6 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 capitalize">{user.role}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <p className="text-center py-6">No users found.</p>
          )}
        </div>
      </main>
    </div>
  )
}
