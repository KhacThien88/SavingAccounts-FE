import React from "react";
import { RouterProvider } from "react-router-dom";

import useRouter from "./hooks/useRoute";

const App: React.FC = () => {
	const router = useRouter();
	return <RouterProvider router={router} />;
};

export default App;
