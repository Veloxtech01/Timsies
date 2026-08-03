import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Router: single centralized route table per CLAUDE.md routing convention.
// Every route renders inside Layout; only the homepage exists today.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
])

// App: root component — hands the router to the rest of the tree.
// Takes no props. Returns the RouterProvider.
function App() {
  return <RouterProvider router={router} />
}

export default App
