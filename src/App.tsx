import React from "react";
import Dashboard from "./App/Pages/Dashboard";
import {
	Navigate,
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

function App() {
	const baseRoutes: RouteObject[] = [
		{
			path: "/",
			element: <Navigate to={"/dashboard"} />,
		},
		{
			path: "/dashboard",
			element: <Dashboard />,
		},
	];

	const router = createBrowserRouter([...baseRoutes]);

	return <RouterProvider router={router} />;
}

export default App;
