import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import { LayoutProps } from "./AdminLayout.type";

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<main className="min-h-screen flex-1 bg-gray-100 p-6">{children}</main>
		</div>
	);
};

export default AdminLayout;
