import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="dark:bg-black dark:text-red-600">
        <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
