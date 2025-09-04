import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import Projects from "./pages/projects/Projects"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App
