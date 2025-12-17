import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter as Routers, Navigate, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.tsx'
import HerosList from './components/HerosList.tsx'
import HeroDetail from './components/HeroDetail.tsx'
import { MessageProvider } from './context/MessageContext.tsx'
import HeroForm from './components/HeroForm.tsx'

const router = Routers([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate replace to='/dashboard' /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/heros', element: <HerosList /> },
      { path: '/heros/:id', element: <HeroDetail /> },
      { path: '/heros/create', element: <HeroForm /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider >
      <RouterProvider router={router} />
    </MessageProvider>
  </StrictMode>,
)
