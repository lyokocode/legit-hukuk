import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Contact, Home, Team, Blogs, SingleBlog, SingleLawyer, NotFound, About, Services } from "./pages"
import Layout from "./utils/Layout"
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />

          <Route path="/hizmetlerimiz" element={<Services />} />

          <Route path="/makaleler" element={<Blogs />} />
          <Route path="/makaleler/:slug" element={<SingleBlog />} />

          <Route path="/ekibimiz" element={<Team />} />
          <Route path="/ekibimiz/:slug" element={<SingleLawyer />} />

          <Route path="/iletisim" element={<Contact />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
