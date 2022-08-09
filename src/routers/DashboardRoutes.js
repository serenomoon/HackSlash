import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../components/about/AboutPage";
import { Characters } from "../components/characters/Characters";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/home/Footer";
import { Home } from "../components/home/Home";
import { ReadComic } from "../components/sagas/comic/ReadComic";
import { SagasPerVol } from "../components/sagas/SagasPerVol";
import { NavBar } from "../components/ui/NavBar";




export const DashboardRoutes = () => {
  return (
    <>
    <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path="sagas" element={<SagasPerVol />} />

         <Route path="issue" element={<ReadComic />} />

         <Route path="contact" element={<Contact />} />

         <Route path="characters" element={<Characters />} />

         <Route path="about" element={<AboutPage />} />

         {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
       </Routes>
      
      {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    
    <Footer />
    </>
  )
}