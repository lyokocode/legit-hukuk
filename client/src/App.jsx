import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Contact, Home, Team, Blogs, SingleBlog, SingleLawyer, NotFound, About, Services, SingleService } from "./pages"
import Layout from "./utils/Layout"
import { useLayoutEffect } from 'react'

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />

            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/hizmetlerimiz/:slug" element={<SingleService />} />

            <Route path="/makaleler" element={<Blogs />} />
            <Route path="/makaleler/:slug" element={<SingleBlog />} />

            <Route path="/ekibimiz" element={<Team />} />
            <Route path="/ekibimiz/:slug" element={<SingleLawyer />} />

            <Route path="/iletisim" element={<Contact />} />

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  )
}

export default App
