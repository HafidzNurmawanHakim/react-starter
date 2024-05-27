import React from "react";
import {
   RouteObject,
   RouterProvider,
   createBrowserRouter,
} from "react-router-dom";
import Home from "./App/pages/Home";

function App() {
   const baseRoutes: RouteObject[] = [
      {
         path: "/",
         element: <Home />,
      },
   ];

   const router = createBrowserRouter([...baseRoutes]);

   return <RouterProvider router={router} />;
}

export default App;
