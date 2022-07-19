import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";




export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />

         {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
       </Routes>
    </>
  )
}