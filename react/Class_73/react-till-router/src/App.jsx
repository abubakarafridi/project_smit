import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
    ],
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
