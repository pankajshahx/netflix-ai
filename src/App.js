import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./LogIn";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <LogIn /> }]);
  return <RouterProvider router={router} />;
}

export default App;
