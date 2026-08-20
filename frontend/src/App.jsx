import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

// Router: single centralized route table per CLAUDE.md routing convention.
// Every route renders inside Layout; only the homepage exists today.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement catches thrown render/route errors, not just bad URLs
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <Faq /> },
      // Catch-all: any unmatched URL renders the 404 inside the normal shell,
      // so the header and footer stay available for recovery.
      { path: '*', element: <NotFound /> },
    ],
  },
])

// App: root component — hands the router to the rest of the tree.
// Takes no props. Returns the RouterProvider.
function App() {
  return <RouterProvider router={router} />
}

export default App
