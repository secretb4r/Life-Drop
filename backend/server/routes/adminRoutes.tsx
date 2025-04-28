import express from 'express'
const router = express.Router()
import User from '../models/User' // Your mongoose User model

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: "Server Error" })
  }
})

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json({ message: "User deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: "Server Error" })
  }
})

export { router } 
