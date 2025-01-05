import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:( <Homepage />),
  },
  {
    path: "/",
    element:<DashboardPage />,
    Children:[
      {path:"/dashboard/chats/:id",element:<ChatPage />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
