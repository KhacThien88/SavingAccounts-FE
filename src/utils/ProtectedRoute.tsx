import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { GetRoleUser } from "./UserUtil";

interface ProtectedRouteProps {
	role: string;
	children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children }) => {
	const token = localStorage.getItem("token");

	if (!token) {
		return (
			<Navigate
				to="/login"
				replace
			/>
		);
	}

	const userRole = GetRoleUser();
	if (userRole !== role) {
		return (
			<Navigate
				to="/login"
				replace
			/>
		);
	}

	return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
