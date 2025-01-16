import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LogIn /> },
    { path: "/browse", element: <Browse /> },
    { path: "/", element: <LogIn /> },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <Browse />
      </RouterProvider>
    </Provider>
  );
}

export default App;
