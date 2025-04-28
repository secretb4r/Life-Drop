// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from "sonner"
 
function App() {
  return (
    <Router>
      <AppRoutes />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/> */}
        <Toaster
         position="top-right"
         theme="dark"
         toastOptions= {{
          className: "bg-slate-900 text-white",
          style: {
            background: "#1e293b",
            color: "#fff",
          },
          duration: 5000,
          classNames: {
            title: " User Authenticated"
          }
          // iconTheme: {
          //   primary: "#fff",
          //   secondary: "#fff", 
         }}/>
    </Router>
  )
}

export default App
