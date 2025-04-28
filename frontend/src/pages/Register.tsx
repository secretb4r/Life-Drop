// src/pages/Register.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import API from "../api/axios"

import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material"


const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "donor", "recipient"])
})

type RegisterFormData = z.infer<typeof registerSchema>

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await API.post("/auth/register", data)
      const { token, user } = res.data
  
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
  
      toast.success("Registration successful!")
  
      // 🎯 Redirect after register
      navigate(`/${user.role}`)
    } catch (err: any) {
      toast.error(err?.response?.data?.error || "Registration failed")
    }
  }
  

  return (
    <Box sx = {{ 
      width:"200px",
      // border:"3px solid red",
      // borderRadius: "10px",

    }} className= "flex flex-col items-center justify-center min-h-screen min-w-full p-4 gap-6">
      
     <div className="flex flex-col items-center justify-center gap-4 min-h-[90dvh] min-w-[50dvw] border-none rounded-md"> 
      <Typography variant="h3" className="mb-4 text-zinc-600">Register</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center  gap-4 max-w-full w-[50%] space-y-4">

        <TextField
          label="Full Name"
          autoFocus
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          className="w-[70%]"
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          className="w-[70%]"
        />

        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          className="w-[70%]"
        />

        <FormControl sx={{ 
          width: "70%"
        }} error={!!errors.role}>
          <InputLabel id="role-label">Select Role</InputLabel>
          <Select
            labelId="role-label"
            defaultValue=""
            value={watch("role") || ""}
            onChange={(e) => setValue("role", e.target.value as any)}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="donor">Donor</MenuItem>
            <MenuItem value="recipient">Recipient</MenuItem>
          </Select>
          <FormHelperText>{errors.role?.message}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" className="w-fit">
          Register
        </Button>
      </form>

      </div>
    </Box>
  )
}

export default Register
