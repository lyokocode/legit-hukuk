import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, Categories, Editor, NotFound, SingleUser, New } from './pages'
import Layout from './utils/Layout'
import { PrivateRoutes } from './utils/PrivateRoute'
import { Users } from './pages'
import { blogInputs, categoryInputs, userInputs } from './mockData/formSource'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/blogs"  >
              <Route index element={<Blogs />} />
              <Route path="create" element={<New inputs={blogInputs} title="blog" api="api/blogs" />} />

            </Route>

            <Route path="/categories"  >
              <Route index element={<Categories />} />
              <Route path='create' element={<New inputs={categoryInputs} title="category" api="api/categories" />} />
            </Route>

            <Route path='/users'>
              <Route index element={<Users />} />
              <Route path=":slug" element={<SingleUser />} />
            </Route>
            <Route path="/user-create" element={<New inputs={userInputs} title="user" api="api/auth/register" />} />

            <Route path="/editor" element={<Editor />} />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App
