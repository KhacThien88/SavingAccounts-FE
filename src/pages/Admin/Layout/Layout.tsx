import React from "react";

import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<main className="min-h-screen flex-1 bg-gray-100 p-6">{children}</main>
		</div>
	);
};

export default Layout;
